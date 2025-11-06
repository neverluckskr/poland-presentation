import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

export default function Footer({ currentSlide, totalSlides, onToggleFullscreen }) {
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
      {/* Прогресс-бар в стиле флага Польши для компьютеров */}
      <div 
        className="hidden md:flex flex-1 w-full h-6 rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(0,0,0,0.2)] border-2 border-white/30 relative"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`Прогрес презентації: ${Math.round(progress)}%`}
      >
        {/* Фон - белая полоса (верхняя половина флага) */}
        <div 
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-white via-gray-50 to-white"
          style={{ 
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
          }}
        />
        {/* Фон - красная полоса (нижняя половина флага) */}
        <div 
          className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-red-700 via-red-600 to-red-700"
          style={{ 
            boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.2)'
          }}
        />
        {/* Прогресс - белая полоса (показывает текущий слайд) */}
        <div 
          className="absolute top-0 left-0 h-1/2 bg-gradient-to-r from-white via-gray-50 to-white transition-all duration-700 ease-out"
          style={{ 
            width: `${progress}%`,
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05), 0 2px 8px rgba(255,255,255,0.3)'
          }}
        />
        {/* Прогресс - красная полоса (показывает текущий слайд) */}
        <div 
          className="absolute bottom-0 left-0 h-1/2 bg-gradient-to-r from-red-600 via-red-500 to-red-600 transition-all duration-700 ease-out"
          style={{ 
            width: `${progress}%`,
            boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.2), 0 -2px 12px rgba(220,38,38,0.6)'
          }}
        />
        {/* Деления для слайдов */}
        <div className="absolute inset-0 flex pointer-events-none">
          {Array.from({ length: totalSlides - 1 }).map((_, index) => (
            <div
              key={index}
              className="flex-1 border-r border-black/10 last:border-r-0"
            />
          ))}
        </div>
        {/* Текущий слайд - индикатор */}
        <div 
          className="absolute top-1/2 left-0 -translate-y-1/2 w-1 h-full bg-white/60 transition-all duration-700 ease-out shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{ 
            left: `${progress}%`,
            marginLeft: '-2px'
          }}
        />
      </div>
      
      {/* Старый прогресс-бар для мобильных (скрыт на компьютерах) */}
      <div 
        className="flex-1 w-full md:hidden h-2 rounded-full bg-white/8 overflow-hidden shadow-[inset_0_2px_5px_rgba(0,0,0,0.3),0_0_20px_rgba(239,68,68,0.2)] border border-white/10"
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
      
      {/* Кнопка полноэкранного режима для мобильных */}
      <div className="md:hidden">
        <IconButton onClick={onToggleFullscreen} ariaLabel="Повноекранний режим">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
        </IconButton>
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
  onToggleFullscreen: PropTypes.func,
};
