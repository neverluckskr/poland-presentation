import InfoCard from '../InfoCard';

export default function DemographicsSlide({ slide, isActive }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4 sm:mb-6 md:mb-8">{slide.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-9 items-center">
        <div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-5 md:mb-7 transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
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
            className="w-full h-auto rounded-xl sm:rounded-2xl md:rounded-3xl border-2 border-dark-border shadow-2xl object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[450px] transition-all duration-600 hover:scale-105 hover:-translate-y-2"
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
