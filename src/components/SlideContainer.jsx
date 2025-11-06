import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import GridView from './GridView';

export default function SlideContainer({ slides, currentIndex, onSlideClick, isGridView, onCloseGrid, onNext, onPrev }) {
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
    
    const deltaX = Math.abs(touchStartX.current - touchEndX.current);
    const deltaY = Math.abs(touchStartY.current - touchEndY.current);
    
    if (deltaY > deltaX && deltaY > 10) {
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    if (!isSwiping) {
      touchStartX.current = 0;
      touchStartY.current = 0;
      touchEndX.current = 0;
      touchEndY.current = 0;
      return;
    }
    
    const deltaX = touchStartX.current - touchEndX.current;
    const deltaY = touchStartY.current - touchEndY.current;
    
    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaY) < 30;
    
    if (isHorizontalSwipe && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        onNext();
      } else {
        onPrev();
      }
    }
    
    setIsSwiping(false);
    touchStartX.current = 0;
    touchStartY.current = 0;
    touchEndX.current = 0;
    touchEndY.current = 0;
  };

  if (isGridView) {
    return <GridView slides={slides} currentIndex={currentIndex} onSlideClick={onSlideClick} onClose={onCloseGrid} />;
  }

  return (
    <div 
      className="w-full max-w-7xl h-full relative perspective-2000 touch-pan-y"
      role="main"
      aria-label="Контейнер слайдів презентації"
      aria-live="polite"
      aria-atomic="true"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <Slide
          key={slide.id}
          slide={slide}
          isActive={index === currentIndex}
          index={index}
        />
      ))}
    </div>
  );
}

SlideContainer.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onSlideClick: PropTypes.func.isRequired,
  isGridView: PropTypes.bool.isRequired,
  onCloseGrid: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};
