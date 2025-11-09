import { useState, useEffect, useCallback, useRef } from 'react';

const STORAGE_KEY = 'presentation-preferences';

function readPreferences() {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.warn('Не удалось прочитать настройки презентации из localStorage', error);
    return {};
  }
}

function writePreferences(preferences) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.warn('Не удалось сохранить настройки презентации в localStorage', error);
  }
}

function clampIndex(index, length) {
  if (length <= 0) {
    return 0;
  }

  const safeIndex = Number.isFinite(index) ? index : 0;
  return Math.min(length - 1, Math.max(0, safeIndex));
}

export function usePresentation(slides) {
  const slidesCount = slides.length;
  const preferencesRef = useRef(null);

  if (preferencesRef.current === null) {
    preferencesRef.current = readPreferences();
  }

  const [currentSlide, setCurrentSlide] = useState(() =>
    clampIndex(preferencesRef.current.lastSlide ?? 0, slidesCount)
  );
  const [isGridView, setIsGridView] = useState(() =>
    Boolean(preferencesRef.current.isGridView)
  );
  const [isDarkTheme, setIsDarkTheme] = useState(() =>
    preferencesRef.current.isDarkTheme ?? true
  );

  const goToSlide = useCallback((index) => {
    const nextIndex = clampIndex(index, slidesCount);

    setCurrentSlide((prev) => {
      if (prev === nextIndex) {
        return prev;
      }
      return nextIndex;
    });

    if (typeof window !== 'undefined') {
      const normalizedIndex = clampIndex(index, slidesCount);
      window.location.hash = `#${normalizedIndex + 1}`;
    }
  }, [slidesCount]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev < slidesCount - 1) {
        const nextIndex = prev + 1;
        if (typeof window !== 'undefined') {
          window.location.hash = `#${nextIndex + 1}`;
        }
        return nextIndex;
      }
      return prev;
    });
  }, [slidesCount]);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev > 0) {
        const nextIndex = prev - 1;
        if (typeof window !== 'undefined') {
          window.location.hash = `#${nextIndex + 1}`;
        }
        return nextIndex;
      }
      return prev;
    });
  }, []);

  const toggleGrid = useCallback(() => {
    setIsGridView((prev) => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleHashChange = () => {
      const hash = parseInt(window.location.hash.substring(1), 10);
      if (Number.isNaN(hash)) {
        return;
      }
      const nextIndex = clampIndex(hash - 1, slidesCount);
      setCurrentSlide((prev) => (prev === nextIndex ? prev : nextIndex));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [slidesCount]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const hash = parseInt(window.location.hash.substring(1), 10);
    if (!Number.isNaN(hash)) {
      const nextIndex = clampIndex(hash - 1, slidesCount);
      setCurrentSlide((prev) => (prev === nextIndex ? prev : nextIndex));
      return;
    }

    const storedIndex = clampIndex(preferencesRef.current.lastSlide ?? currentSlide, slidesCount);
    setCurrentSlide(storedIndex);
    window.location.hash = `#${storedIndex + 1}`;
  }, [slidesCount]);

  useEffect(() => {
    document.body.classList.toggle('light-theme', !isDarkTheme);
  }, [isDarkTheme]);

  useEffect(() => {
    const nextPreferences = {
      ...preferencesRef.current,
      lastSlide: clampIndex(currentSlide, slidesCount),
      isGridView,
      isDarkTheme,
    };

    preferencesRef.current = nextPreferences;
    writePreferences(nextPreferences);
  }, [currentSlide, isGridView, isDarkTheme, slidesCount]);

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
