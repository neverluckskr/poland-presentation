import AnimatedNumber from '../AnimatedNumber';
import InfoCard from '../InfoCard';

export default function InfoCardsSlide({ slide, isActive }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4 sm:mb-6 md:mb-8 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]">
        {slide.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
        <div className="grid gap-3 sm:gap-4 md:gap-5">
          {slide.content.cards.map((card, index) => (
            <InfoCard key={index} card={card} isActive={isActive} />
          ))}
        </div>
        <div>
          <img
            src={slide.content.image}
            alt={slide.content.imageAlt}
            className="w-full h-auto rounded-xl sm:rounded-2xl md:rounded-3xl border-2 border-dark-border shadow-2xl object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[450px] transition-all duration-600 hover:scale-105 hover:-translate-y-2 hover:rotate-y-[5deg] hover:shadow-[0_30px_80px_-25px_rgba(239,68,68,0.6)] hover:border-primary/80"
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
