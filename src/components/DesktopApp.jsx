import { useState, useEffect } from 'react';
import PresentationLayout from './PresentationLayout';
import { slidesData } from '../data/slides';
import { usePresentation } from '../hooks/usePresentation';

export default function DesktopApp() {
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
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

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      if (document.fullscreenElement) {
        document.body.classList.add('fullscreen-mode');
      } else {
        document.body.classList.remove('fullscreen-mode');
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    handleFullscreenChange();

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      }
      if (e.key === 'Escape' && isGridView) {
        e.preventDefault();
        toggleGrid();
      }
      if (e.key === 'f' || e.key === 'F') {
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          toggleFullscreen();
        }
      }
      if (e.key === 'g' || e.key === 'G') {
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          toggleGrid();
        }
      }
      if (e.key === 't' || e.key === 'T') {
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          toggleTheme();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, toggleGrid, isGridView, toggleFullscreen, toggleTheme]);

  return (
    <PresentationLayout
      variant="desktop"
      loading={loading}
      isFullscreen={isFullscreen}
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
        isFullscreen,
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

