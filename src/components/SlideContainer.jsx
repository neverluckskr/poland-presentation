import PropTypes from 'prop-types';
import Slide from './Slide';
import GridView from './GridView';

export default function SlideContainer({ slides, currentIndex, onSlideClick, isGridView, onCloseGrid }) {
  if (isGridView) {
    return <GridView slides={slides} currentIndex={currentIndex} onSlideClick={onSlideClick} onClose={onCloseGrid} />;
  }

  return (
    <div 
      className="w-full max-w-7xl h-full relative perspective-2000"
      role="main"
      aria-label="Контейнер слайдів презентації"
      aria-live="polite"
      aria-atomic="true"
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
};
