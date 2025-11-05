import PropTypes from 'prop-types';
import IconButton from './IconButton';

export default function Topbar({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onToggleGrid,
  onToggleFullscreen,
  onToggleTheme,
}) {
  return (
    <header 
      className="glass border-b border-dark-border px-2 sm:px-3 md:px-5 py-2 sm:py-3 md:py-3.5 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden gap-2 sm:gap-0"
      role="banner"
      aria-label="Навігація презентації"
    >
      <div className="flex items-center gap-2 sm:gap-3.5 group relative z-10">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 15" 
          className="w-5 h-auto sm:w-6 md:w-7 filter drop-shadow-[0_0_10px_rgba(239,68,68,0.6)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
          style={{ animation: 'float 4s ease-in-out infinite, flagWave 2s ease-in-out infinite' }}
          aria-hidden="true"
        >
          <path fill="#fff" d="M0 0h24v15H0z"/>
          <path fill="#dc143c" d="M0 7.5h24v7.5H0z"/>
        </svg>
        <span className="font-extrabold text-sm sm:text-base md:text-lg tracking-wide transition-all duration-300 group-hover:text-primary group-hover:scale-105" style={{ animation: 'textGlow 3s ease-in-out infinite' }}>
          <span className="hidden sm:inline">Презентація: </span>Польща
        </span>
      </div>
      
      <div className="absolute left-1/2 -translate-x-1/2 opacity-40 text-xs text-gray-400 hover:opacity-60 transition-opacity z-0 hidden sm:block" aria-hidden="true">
        developed by antisocial club簡単ランク
      </div>

      <nav className="flex items-center gap-1 sm:gap-2 relative z-10 flex-wrap justify-center" role="navigation" aria-label="Управління презентацією">
        <IconButton onClick={onPrev} disabled={currentSlide === 0} ariaLabel="Попередній слайд">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
        </IconButton>

        <span 
          className="font-extrabold px-2 sm:px-3 py-1 sm:py-1.5 text-primary text-shadow-[0_0_15px_rgba(239,68,68,0.7)] bg-primary/10 rounded-lg border border-primary/30 flex items-center gap-1 animate-pulse-slow text-xs sm:text-sm md:text-base"
          aria-label={`Слайд ${currentSlide + 1} з ${totalSlides}`}
          role="status"
        >
          <span>{currentSlide + 1}</span>
          <span className="opacity-60">/</span>
          <span>{totalSlides}</span>
        </span>

        <IconButton onClick={onNext} disabled={currentSlide === totalSlides - 1} ariaLabel="Наступний слайд">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
        </IconButton>

        <div className="w-px h-4 sm:h-6 bg-dark-border mx-0.5 sm:mx-1" aria-hidden="true" />

        <IconButton onClick={onToggleGrid} ariaLabel="Огляд слайдів">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6A2.25 2.25 0 0115.75 3.75h2.25A2.25 2.25 0 0120.25 6v2.25a2.25 2.25 0 01-2.25 2.25H15.75A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
        </IconButton>

        <IconButton onClick={onToggleFullscreen} ariaLabel="Повноекранний режим">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
        </IconButton>

        <IconButton onClick={onToggleTheme} ariaLabel="Змінити тему">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
        </IconButton>
      </nav>
    </header>
  );
}

Topbar.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onToggleGrid: PropTypes.func.isRequired,
  onToggleFullscreen: PropTypes.func.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};
