export default function GeographySlide({ slide }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-3 sm:mb-4 md:mb-6 lg:mb-8">{slide.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-9 items-center">
        <div>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-7">{slide.content.description}</p>
          
          <div className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-7">
            <div>
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary mb-2 sm:mb-3 md:mb-4">🗺️ Сусідні країни</h3>
              <ul className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl columns-1 sm:columns-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8 list-none">
                {slide.content.neighbors.map((country, index) => (
              <li key={index} className="pl-6 xs:pl-8 sm:pl-10 py-1.5 xs:py-2 sm:py-3 relative transition-all duration-300 hover:translate-x-2 hover:text-primary hover:font-semibold">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-primary to-red-500/50 shadow-[0_0_15px_rgb(239,68,68)]" />
                {country}
              </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary mb-2 sm:mb-3 md:mb-4">💧 Водні ресурси</h3>
            <ul className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl list-none">
              <li className="py-1 sm:py-1.5 transition-all duration-300 hover:text-primary hover:font-semibold"><strong>Море:</strong> {slide.content.water.sea}</li>
              <li className="py-1 sm:py-1.5 transition-all duration-300 hover:text-primary hover:font-semibold"><strong>Основні порти:</strong> {slide.content.water.ports}</li>
              <li className="py-1 sm:py-1.5 transition-all duration-300 hover:text-primary hover:font-semibold"><strong>Головні річки:</strong> {slide.content.water.rivers}</li>
            </ul>
            </div>
            
            <div className="bg-primary/12 p-2 xs:p-3 sm:p-4 rounded-lg sm:rounded-xl md:rounded-2xl border border-primary/40">
              <strong className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-primary block mb-1 sm:mb-2">🚛 Транзитний центр Європи</strong>
              <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold">Стратегічне положення між Західною і Східною Європою</span>
            </div>
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
