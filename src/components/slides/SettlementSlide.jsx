export default function SettlementSlide({ slide }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-3 sm:mb-4 md:mb-6 lg:mb-8">{slide.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-9 items-center">
        <div className="order-2 grid gap-4 sm:gap-5 md:gap-6 lg:gap-9">
          <div>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-center">Найбільші міста</h3>
            <ul className="columns-1 sm:columns-2 gap-3 sm:gap-5 md:gap-7 lg:gap-10 text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl list-none">
              {slide.content.cities.map((city, index) => (
                <li key={index} className="pl-6 xs:pl-8 sm:pl-10 py-1.5 xs:py-2 sm:py-3 relative transition-all duration-300 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-center">Українська діаспора</h3>
            <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
              {slide.content.diaspora.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/6 p-2 xs:p-3 sm:p-4 rounded-lg sm:rounded-xl md:rounded-2xl border border-dark-border transition-all duration-300 hover:border-primary/80 hover:bg-white/10 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(239,68,68,0.1)] touch-manipulation active:scale-95"
                >
                  <strong className="block text-xs xs:text-sm sm:text-base md:text-lg mb-1 xs:mb-1.5 text-primary">{item.city}</strong>
                  <div className="text-xs xs:text-sm leading-tight">
                    <span className="block opacity-90 mb-0.5">{item.peak}</span>
                    <span className="block">{item.current}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs xs:text-sm sm:text-base opacity-70 text-center mt-2 sm:mt-3 md:mt-4 px-2 sm:px-3 md:px-4 transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.note}</p>
          </div>
        </div>
        
        <div className="order-1 text-center hidden md:block">
          <img
            src={slide.content.image}
            alt={slide.content.imageAlt}
            className="w-full max-w-[950px] h-auto border-none"
            style={{ background: 'transparent' }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
