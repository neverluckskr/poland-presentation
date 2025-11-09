import { useState, useEffect } from 'react';
import PresentationLayout from './PresentationLayout';
import { slidesData } from '../data/slides';
import { usePresentation } from '../hooks/usePresentation';

export default function MobileApp() {
  const [loading, setLoading] = useState(true);
  const {
    currentSlide,
    goToNext,
    goToPrev,
    goToSlide,
    toggleGrid,
    isGridView,
    toggleFullscreen,
    toggleTheme,
    isDarkTheme,
  } = usePresentation(slidesData);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PresentationLayout
      variant="mobile"
      loading={loading}
      topbarProps={{
        currentSlide,
        totalSlides: slidesData.length,
        onPrev: goToPrev,
        onNext: goToNext,
        onToggleGrid: toggleGrid,
        onToggleFullscreen: toggleFullscreen,
        onToggleTheme: toggleTheme,
        isGridView,
        isDarkTheme,
        isFullscreen: false,
      }}
      slideContainerProps={{
        slides: slidesData,
        currentIndex: currentSlide,
        onSlideClick: goToSlide,
        isGridView,
        onCloseGrid: toggleGrid,
        onNext: goToNext,
        onPrev: goToPrev,
      }}
      footerProps={{
        currentSlide,
        totalSlides: slidesData.length,
      }}
    />
  );
}

