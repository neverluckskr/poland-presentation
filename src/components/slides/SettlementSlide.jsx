export default function SettlementSlide({ slide }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-3 sm:mb-4 md:mb-6 lg:mb-8">{slide.title}</h2>
      <div className="grid grid-cols-2 gap-9 items-center" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="order-2 grid gap-9">
          <div>
            <h3 className="text-3xl text-primary mb-5 text-center">Найбільші міста</h3>
            <ul className="columns-2 gap-10 text-2xl list-none">
              {slide.content.cities.map((city, index) => (
                <li key={index} className="pl-10 py-3 relative transition-all duration-300 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl text-primary mb-5 text-center">Українська діаспора</h3>
            <ul className="text-xl list-none list-inside pl-0">
              {slide.content.diaspora.map((item, index) => (
                <li key={index} className="mb-2 transition-all duration-300 hover:text-primary hover:font-semibold">
                  <strong>{item.city}:</strong> {item.peak} → {item.current}
                </li>
              ))}
            </ul>
            <p className="text-base opacity-70 text-center mt-4 px-4 transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.note}</p>
          </div>
        </div>
        
        <div className="order-1 text-center">
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
