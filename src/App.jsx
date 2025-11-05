import { useState, useEffect, useCallback } from 'react';
import Topbar from './components/Topbar';
import SlideContainer from './components/SlideContainer';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ToastContainer from './components/ToastContainer';
import ParticlesCanvas from './components/ParticlesCanvas';
import { slidesData } from './data/slides';
import { usePresentation } from './hooks/usePresentation';

function App() {
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
      // Don't prevent default if user is typing in an input
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
    <>
      {loading && <LoadingScreen />}
      <ParticlesCanvas />
      <div 
        className={`presentation-container relative z-10 flex flex-col h-screen ${isFullscreen ? 'fullscreen' : ''}`}
        role="application"
        aria-label="Презентація про Республіку Польща"
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
          className="flex-1 p-2 sm:p-3 md:p-5 flex items-center justify-center overflow-hidden relative"
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

export default App;
