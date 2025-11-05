import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Footer({ currentSlide, totalSlides }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <footer 
      className="glass border-t border-dark-border px-2 sm:px-3 md:px-5 py-2 sm:py-3 md:py-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-5 relative"
      role="contentinfo"
      aria-label="Інформація про прогрес презентації"
    >
      <div 
        className="flex-1 w-full sm:w-auto h-2 sm:h-3 rounded-full bg-white/8 overflow-hidden shadow-[inset_0_2px_5px_rgba(0,0,0,0.3),0_0_20px_rgba(239,68,68,0.2)] border border-white/10"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`Прогрес презентації: ${Math.round(progress)}%`}
      >
        <div
          className="h-full bg-gradient-to-r from-primary via-red-500/70 to-primary bg-[length:200%_100%] rounded-full transition-all duration-500 ease-out relative overflow-hidden"
          style={{ width: `${progress}%`, animation: 'progressSlide 2s linear infinite' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" style={{ animation: 'progressShine 2.5s infinite' }} />
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm opacity-85">
        <span className="hidden sm:inline">© 2025. All rights reserved</span>
        <span className="opacity-40 hidden sm:inline" aria-hidden="true">•</span>
        <span className="font-semibold text-primary" aria-label={`Поточний час: ${time}`}>{time}</span>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired,
};
