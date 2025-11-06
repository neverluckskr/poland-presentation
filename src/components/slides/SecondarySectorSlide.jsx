export default function SecondarySectorSlide({ slide }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-2 sm:mb-3 md:mb-4 lg:mb-5">{slide.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-9 items-center">
        <div>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3 md:mb-4 transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.description}</p>
          <div>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl text-primary mb-1.5 sm:mb-2 md:mb-3">Основні галузі</h3>
            <ul className="text-xs xs:text-sm sm:text-base md:text-lg list-none">
              {slide.content.industries.map((industry, index) => {
                const parts = industry.split(':');
                return (
                  <li key={index} className="pl-5 xs:pl-6 sm:pl-8 py-1 xs:py-1.5 sm:py-2 relative transition-all duration-300 hover:translate-x-2 hover:text-primary hover:font-semibold">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                    <strong className="block mb-0.5 xs:mb-1">{parts[0]}:</strong>
                    <span className="block">{parts[1]}</span>
                  </li>
                );
              })}
            </ul>
            <p className="text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 opacity-90 transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.note}</p>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={slide.content.image}
            alt={slide.content.imageAlt}
            className="w-full h-auto rounded-xl md:rounded-2xl lg:rounded-3xl border-2 border-dark-border shadow-2xl object-cover max-h-[400px] lg:max-h-[450px] transition-all duration-600 hover:scale-105 hover:-translate-y-2"
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
