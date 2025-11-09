export default function ServicesDetailSlide({ slide }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-3 sm:mb-4 md:mb-6 lg:mb-8">{slide.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-9 items-center">
        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <div className="bg-primary/12 border border-primary/40 p-2 xs:p-3 sm:p-4 rounded-lg sm:rounded-xl md:rounded-2xl">
            <strong className="text-xs xs:text-sm sm:text-base text-primary block mb-0.5 sm:mb-1">🏦 Финансовый сектор</strong>
            <span className="text-xs xs:text-sm sm:text-base md:text-lg transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.financial}</span>
          </div>
          
          <div>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary mb-2 sm:mb-3">🚛 Транспорт и логистика</h3>
            <ul className="text-xs xs:text-sm sm:text-base md:text-lg list-none">
              {slide.content.transport.map((item, index) => (
                <li key={index} className="pl-4 xs:pl-5 sm:pl-6 py-1 xs:py-1.5 sm:py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary mb-2 sm:mb-3">💻 ИТ-сфера</h3>
            <ul className="text-xs xs:text-sm sm:text-base md:text-lg list-none">
              {slide.content.it.map((item, index) => (
                <li key={index} className="pl-4 xs:pl-5 sm:pl-6 py-1 xs:py-1.5 sm:py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-primary/12 border border-primary/40 p-2 xs:p-3 sm:p-4 rounded-lg sm:rounded-xl md:rounded-2xl">
            <strong className="text-xs xs:text-sm sm:text-base md:text-lg block mb-0.5 sm:mb-1">📊 Результат:</strong>
            <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition-all duration-300 hover:text-primary">{slide.content.result}</span>
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
