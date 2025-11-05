export default function TertiarySectorSlide({ slide }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-6xl font-extrabold text-primary mb-8">{slide.title}</h2>
      <div className="grid grid-cols-2 gap-9 items-center" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="order-2">
          <p className="text-lg leading-relaxed mb-7 transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.description}</p>
          <div>
            <h3 className="text-3xl text-primary mb-4">Основні напрями</h3>
            <ul className="text-xl columns-2 gap-8 list-none">
              {slide.content.services.map((service, index) => (
                <li key={index} className="pl-10 py-3 relative transition-all duration-300 hover:translate-x-2 hover:text-primary hover:font-semibold">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgb(239,68,68)]" />
                  {service}
                </li>
              ))}
            </ul>
            <p className="text-lg mt-4 opacity-90 transition-all duration-300 hover:text-primary hover:font-semibold">{slide.content.note}</p>
          </div>
        </div>
        <div className="order-1">
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
