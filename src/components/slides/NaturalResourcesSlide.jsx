export default function NaturalResourcesSlide({ slide }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-6xl font-extrabold text-primary mb-8">{slide.title}</h2>
      <div className="grid grid-cols-2 gap-9 items-center" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="order-2 grid gap-6">
          <div>
            <h3 className="text-3xl text-primary mb-3">⛏️ Мінеральні ресурси</h3>
            <ul className="text-lg list-none">
              {slide.content.mineral.map((item, index) => (
                <li key={index} className="pl-6 py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl text-primary mb-3">🌲 Лісові ресурси</h3>
            <ul className="text-lg list-none">
              {slide.content.forest.map((item, index) => (
                <li key={index} className="pl-6 py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl text-primary mb-3">🌾 Земельні ресурси</h3>
            <ul className="text-lg list-none">
              {slide.content.land.map((item, index) => (
                <li key={index} className="pl-6 py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/6 p-4 rounded-2xl border border-dark-border">
            <strong className="text-xl text-primary block mb-1">🏖️ Рекреаційні ресурси</strong>
            <span className="text-lg transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.recreational}</span>
          </div>
        </div>
        
        <div className="order-1">
          <img
            src={slide.content.image}
            alt={slide.content.imageAlt}
            className="w-full h-auto rounded-3xl border-2 border-dark-border shadow-2xl object-cover max-h-[550px] transition-all duration-600 hover:scale-105 hover:-translate-y-2"
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
