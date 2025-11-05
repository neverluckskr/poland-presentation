import { useState, useEffect, useCallback } from 'react';

export function usePresentation(slides) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGridView, setIsGridView] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
      window.location.hash = `#${index + 1}`;
    }
  }, [slides.length]);

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, slides.length, goToSlide]);

  const goToPrev = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  const toggleGrid = useCallback(() => {
    setIsGridView(prev => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme(prev => {
      const newValue = !prev;
      document.body.classList.toggle('light-theme', !newValue);
      return newValue;
    });
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = parseInt(window.location.hash.substring(1));
      const initialIndex = (isNaN(hash) || hash < 1 || hash > slides.length) ? 0 : hash - 1;
      if (initialIndex !== currentSlide) {
        goToSlide(initialIndex);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentSlide, slides.length, goToSlide]);

  useEffect(() => {
    if (!window.location.hash) {
      goToSlide(0);
    }
  }, [goToSlide]);

  return {
    currentSlide,
    goToNext,
    goToPrev,
    goToSlide,
    toggleGrid,
    isGridView,
    toggleFullscreen,
    toggleTheme,
    isDarkTheme,
  };
}
