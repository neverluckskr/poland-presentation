export default function PrimarySectorSlide({ slide }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-6xl font-extrabold text-primary mb-8">{slide.title}</h2>
      <div className="grid grid-cols-2 gap-9 items-center">
        <div className="grid gap-6">
          <div>
            <h3 className="text-2xl text-primary mb-3">⛏️ Видобувна промисловість</h3>
            <p className="text-lg leading-relaxed mb-3 transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.mining[0]}</p>
            <ul className="text-base list-none">
              {slide.content.mining.slice(1).map((item, index) => (
                <li key={index} className="pl-6 py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  <strong>{item.split('—')[0]}</strong> — {item.split('—')[1]}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl text-primary mb-3">🌾 Сільське господарство</h3>
            <h4 className="text-lg text-primary mb-2">Рослинництво:</h4>
            <ul className="text-base mb-4 list-none">
              {slide.content.agriculture.crops.map((crop, index) => (
                <li key={index} className="pl-6 py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  {crop}
                </li>
              ))}
            </ul>
            <h4 className="text-lg text-primary mb-2">Тваринництво:</h4>
            <ul className="text-base list-none">
              {slide.content.agriculture.livestock.map((item, index) => (
                <li key={index} className="pl-6 py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="bg-white/6 p-4 rounded-2xl border border-dark-border mt-4">
              <strong className="text-base text-primary block mb-1">📦 Експорт</strong>
              <span className="text-base transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.export}</span>
            </div>
          </div>
        </div>
        
        <div>
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
