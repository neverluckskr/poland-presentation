import InfoCard from '../InfoCard';

export default function DemographicsSlide({ slide, isActive }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-3 sm:mb-4 md:mb-6 lg:mb-8">{slide.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-9 items-center">
        <div>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-7 transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            {slide.content.cards.map((card, index) => (
              <InfoCard
                key={index}
                card={card}
                isActive={isActive}
                className={card.fullWidth ? 'col-span-1 sm:col-span-2' : ''}
              />
            ))}
          </div>
        </div>
        <div>
          <img
            src={slide.content.image}
            alt={slide.content.imageAlt}
            className="w-full h-auto rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border-2 border-dark-border shadow-2xl object-cover max-h-[200px] xs:max-h-[250px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[450px] transition-all duration-600 hover:scale-105 hover:-translate-y-2"
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
