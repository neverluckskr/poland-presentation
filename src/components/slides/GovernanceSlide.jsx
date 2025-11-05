import AnimatedNumber from '../AnimatedNumber';
import InfoCard from '../InfoCard';

export default function GovernanceSlide({ slide, isActive }) {
  if (slide.type === 'structure') {
    return (
      <div className="w-full">
        <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-3 sm:mb-4 md:mb-6 lg:mb-8">{slide.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 items-center">
          <div className="grid gap-6">
            <div className="bg-primary/12 border-2 border-primary/45 text-center p-4 rounded-2xl">
              <strong className="text-lg text-primary block mb-1">🇵🇱 Форма державного устрою</strong>
              <span className="text-2xl font-black block mt-1">Унітарна держава</span>
            </div>
            
            <div>
              <h3 className="text-3xl text-primary mb-2.5">Що таке унітарна держава?</h3>
              <ul className="text-lg list-none">
                <li className="pl-6 py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">• Єдина система влади на всій території</li>
                <li className="pl-6 py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">• Централізоване управління</li>
                <li className="pl-6 py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">• Адміністративні одиниці підпорядковані центру</li>
                <li className="pl-6 py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">• Єдина конституція та законодавство</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl sm:text-3xl text-primary mb-2.5">📍 Адміністративний поділ</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {slide.content.divisions.map((div, index) => (
                  <div 
                    key={index} 
                    className="bg-white/6 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-dark-border transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 hover:border-primary/80 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(239,68,68,0.2),0_0_60px_rgba(239,68,68,0.3)] focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(239,68,68,0.2),0_0_60px_rgba(239,68,68,0.3)]"
                    onTouchStart={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.8)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), inset 0 0 40px rgba(239,68,68,0.2), 0 0 60px rgba(239,68,68,0.3)';
                    }}
                    onTouchEnd={(e) => {
                      setTimeout(() => {
                        e.currentTarget.style.borderColor = '';
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.boxShadow = '';
                      }, 200);
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`${div.name}: ${div.count}`}
                  >
                    <strong className="text-sm sm:text-base block mb-1">{div.name}</strong>
                    <span className="text-xl sm:text-2xl font-extrabold">
                      {div.animated && isActive ? (
                        <AnimatedNumber value={div.count} decimals={0} isActive={isActive} />
                      ) : (
                        div.count
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <img
              src={slide.content.image}
              alt={slide.content.imageAlt}
              className="w-full h-auto rounded-3xl border-2 border-dark-border shadow-2xl object-cover max-h-[450px] transition-all duration-600 hover:scale-105 hover:-translate-y-2"
              style={{
                boxShadow: '0 20px 50px -20px rgba(0, 0, 0, 0.5), 0 0 25px rgba(255, 255, 255, 0.12)',
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-3 sm:mb-4 md:mb-6 lg:mb-8">{slide.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-9 items-center">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 sm:gap-6">
            <div className="bg-primary/12 border-2 border-primary/45 p-5 sm:p-7 rounded-xl sm:rounded-2xl col-span-full">
              <h3 className="text-base sm:text-lg text-primary mb-2">🏛️ Форма правління</h3>
              <p className="text-xl sm:text-2xl font-extrabold mb-2">{slide.content.form}</p>
              <p className="text-base sm:text-lg leading-relaxed opacity-95 transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.form} — змішана система з розподілом влади між президентом, урядом та парламентом.</p>
            </div>
            
            <div 
              className="bg-white/6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-dark-border transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 hover:border-primary/80 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(239,68,68,0.2),0_0_60px_rgba(239,68,68,0.3)] focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(239,68,68,0.2),0_0_60px_rgba(239,68,68,0.3)]"
              onTouchStart={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.8)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), inset 0 0 40px rgba(239,68,68,0.2), 0 0 60px rgba(239,68,68,0.3)';
              }}
              onTouchEnd={(e) => {
                setTimeout(() => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.boxShadow = '';
                }, 200);
              }}
              tabIndex={0}
              role="button"
              aria-label="Глава держави"
            >
              <h3 className="text-base sm:text-lg text-primary mb-2">👤 Глава держави</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-95 transition-all duration-300 hover:text-primary hover:font-semibold">Президент — {slide.content.president}</p>
            </div>
            
            <div 
              className="bg-white/6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-dark-border transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 hover:border-primary/80 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(239,68,68,0.2),0_0_60px_rgba(239,68,68,0.3)] focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(239,68,68,0.2),0_0_60px_rgba(239,68,68,0.3)]"
              onTouchStart={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.8)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), inset 0 0 40px rgba(239,68,68,0.2), 0 0 60px rgba(239,68,68,0.3)';
              }}
              onTouchEnd={(e) => {
                setTimeout(() => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.boxShadow = '';
                }, 200);
              }}
              tabIndex={0}
              role="button"
              aria-label="Виконавча влада"
            >
              <h3 className="text-base sm:text-lg text-primary mb-2">🏢 Виконавча влада</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-95">Уряд на чолі з прем'єр-міністром.</p>
            </div>
            
            <div 
              className="bg-white/6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-dark-border transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 hover:border-primary/80 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(239,68,68,0.2),0_0_60px_rgba(239,68,68,0.3)] focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(239,68,68,0.2),0_0_60px_rgba(239,68,68,0.3)]"
              onTouchStart={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.8)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), inset 0 0 40px rgba(239,68,68,0.2), 0 0 60px rgba(239,68,68,0.3)';
              }}
              onTouchEnd={(e) => {
                setTimeout(() => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.boxShadow = '';
                }, 200);
              }}
              tabIndex={0}
              role="button"
              aria-label="Сейм"
            >
              <h3 className="text-base sm:text-lg text-primary mb-2">📜 Сейм</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-95">{slide.content.sejm}</p>
            </div>
            
            <div 
              className="bg-white/6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-dark-border transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 hover:border-primary/80 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(239,68,68,0.2),0_0_60px_rgba(239,68,68,0.3)] focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(239,68,68,0.2),0_0_60px_rgba(239,68,68,0.3)]"
              onTouchStart={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.8)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), inset 0 0 40px rgba(239,68,68,0.2), 0 0 60px rgba(239,68,68,0.3)';
              }}
              onTouchEnd={(e) => {
                setTimeout(() => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.boxShadow = '';
                }, 200);
              }}
              tabIndex={0}
              role="button"
              aria-label="Сенат"
            >
              <h3 className="text-base sm:text-lg text-primary mb-2">🏛️ Сенат</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-95">{slide.content.senate}</p>
            </div>
          </div>
        </div>
        
        <div>
          <img
            src={slide.content.image}
            alt={slide.content.imageAlt}
            className="w-full h-auto rounded-3xl border-2 border-dark-border shadow-2xl object-cover max-h-[450px]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
