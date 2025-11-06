import { useState, useEffect, useCallback } from 'react';
import Topbar from './Topbar';
import SlideContainer from './SlideContainer';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';
import ToastContainer from './ToastContainer';
import ParticlesCanvas from './ParticlesCanvas';
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
    <>
      {loading && <LoadingScreen />}
      <ParticlesCanvas />
      <div 
        className="presentation-container relative z-10 flex flex-col h-screen mobile-version"
        role="application"
        aria-label="Презентація про Республіку Польща (Мобільна версія)"
      >
        <Topbar
          currentSlide={currentSlide}
          totalSlides={slidesData.length}
          onPrev={goToPrev}
          onNext={goToNext}
          onToggleGrid={toggleGrid}
          onToggleFullscreen={toggleFullscreen}
          onToggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
        />
        
        <main 
          className="flex-1 p-2 flex items-center justify-center overflow-hidden relative"
          role="main"
          aria-label="Основний вміст презентації"
        >
          <SlideContainer
            slides={slidesData}
            currentIndex={currentSlide}
            onSlideClick={goToSlide}
            isGridView={isGridView}
            onCloseGrid={toggleGrid}
            onNext={goToNext}
            onPrev={goToPrev}
          />
        </main>

        <Footer currentSlide={currentSlide} totalSlides={slidesData.length} />
      </div>
      <ToastContainer />
    </>
  );
}

