import AnimatedNumber from '../AnimatedNumber';

export default function InfoCardsSlide({ slide, isActive }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4 xs:mb-5 sm:mb-6 md:mb-8 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]">
        {slide.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 items-center">
        <div className="grid gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {slide.content.cards.map((card, index) => (
            <div key={index} className="bg-white/6 p-3 xs:p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl border border-dark-border transition-all duration-500 cursor-pointer touch-manipulation active:scale-95 hover:-translate-y-2 hover:scale-105 hover:rotate-z-[2deg] hover:border-primary/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(239,68,68,0.2),0_0_60px_rgba(239,68,68,0.3)] hover:bg-white/10 focus:border-primary/80 focus:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(239,68,68,0.2),0_0_60px_rgba(239,68,68,0.3)] focus:bg-white/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full group-focus:translate-x-full transition-transform duration-800" />
              <strong className="block text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-primary mb-1 sm:mb-1.5 font-bold drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                {card.label}
              </strong>
              <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black inline-block" style={{ animation: 'numberFloat 3s ease-in-out infinite' }}>
                {card.animated && isActive ? (
                  <>
                    <AnimatedNumber value={card.value} decimals={card.value.includes('.') ? 1 : 0} isActive={isActive} />
                    {card.unit}
                  </>
                ) : (
                  <>
                    {card.value}
                    {card.unit && ` ${card.unit}`}
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <img
            src={slide.content.image}
            alt={slide.content.imageAlt}
            className="w-full h-auto rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border-2 border-dark-border shadow-2xl object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[450px] transition-all duration-600 hover:scale-105 hover:-translate-y-2 hover:rotate-y-[5deg] hover:shadow-[0_30px_80px_-25px_rgba(239,68,68,0.6)] hover:border-primary/80"
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
