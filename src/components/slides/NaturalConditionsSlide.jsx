export default function NaturalConditionsSlide({ slide }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-3 sm:mb-4 md:mb-6 lg:mb-8">{slide.title}</h2>
      <div className="grid grid-cols-2 gap-9 items-center">
        <div className="grid gap-6">
          <div>
            <h3 className="text-3xl text-primary mb-3">🌡️ Клімат</h3>
            <p className="text-xl leading-relaxed transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.climate}</p>
          </div>
          
          <div>
            <h3 className="text-3xl text-primary mb-3">⛰️ Рельєф</h3>
            <ul className="text-lg list-none">
              {slide.content.relief.map((item, index) => (
                <li key={index} className="pl-6 py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl text-primary mb-3">🌊 Річки</h3>
            <ul className="text-lg list-none">
              {slide.content.rivers.map((item, index) => (
                <li key={index} className="pl-6 py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  {item}
                </li>
              ))}
            </ul>
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
