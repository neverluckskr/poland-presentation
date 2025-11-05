export default function ServicesDetailSlide({ slide }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-6xl font-extrabold text-primary mb-8">{slide.title}</h2>
      <div className="grid grid-cols-2 gap-9 items-center">
        <div className="grid gap-6">
          <div className="bg-primary/12 border border-primary/40 p-4 rounded-2xl">
            <strong className="text-base text-primary block mb-1">🏦 Фінансовий сектор</strong>
            <span className="text-lg transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.financial}</span>
          </div>
          
          <div>
            <h3 className="text-3xl text-primary mb-3">🚛 Транспорт і логістика</h3>
            <ul className="text-lg list-none">
              {slide.content.transport.map((item, index) => (
                <li key={index} className="pl-6 py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl text-primary mb-3">💻 ІТ-сфера</h3>
            <ul className="text-lg list-none">
              {slide.content.it.map((item, index) => (
                <li key={index} className="pl-6 py-2 relative transition-all duration-300 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-primary/12 border border-primary/40 p-4 rounded-2xl">
            <strong className="text-lg block mb-1">📊 Результат:</strong>
            <span className="text-xl font-semibold transition-all duration-300 hover:text-primary">{slide.content.result}</span>
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
