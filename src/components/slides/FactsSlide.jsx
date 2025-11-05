export default function FactsSlide({ slide }) {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-3 sm:mb-4 md:mb-6 lg:mb-8">{slide.title}</h2>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-3xl text-primary mb-4 font-bold">📜 Історичні факти</h3>
          <ul className="text-xl list-none space-y-4">
            {slide.content.historical.map((fact, index) => (
              <li key={index} className="mb-4 leading-relaxed transition-all duration-300 hover:text-primary hover:font-semibold">
                <strong className="text-2xl">{fact.title}:</strong> <span className="text-gray-300">{fact.text}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6">
            <img
              src={slide.content.images[0].src}
              alt={slide.content.images[0].alt}
              className="w-full h-52 object-cover rounded-2xl border-2 border-dark-border shadow-xl transition-all duration-300"
              style={{
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 255, 255, 0.15)',
              }}
              loading="lazy"
            />
          </div>
          
          <h3 className="text-3xl text-primary mt-6 mb-4 font-bold">🎨 Культурні та наукові факти</h3>
          <ul className="text-xl list-none space-y-4">
            {slide.content.cultural.map((fact, index) => (
              <li key={index} className="mb-4 leading-relaxed transition-all duration-300 hover:text-primary hover:font-semibold">
                <strong className="text-2xl">{fact.title}:</strong> <span className="text-gray-300">{fact.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-3xl text-primary mb-4 font-bold">🏔️ Географічні факти</h3>
          <ul className="text-xl list-none space-y-4">
            {slide.content.geographical.map((fact, index) => (
              <li key={index} className="mb-4 leading-relaxed transition-all duration-300 hover:text-primary hover:font-semibold">
                <strong className="text-2xl">{fact.title}:</strong> <span className="text-gray-300">{fact.text}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6">
            <img
              src={slide.content.images[1].src}
              alt={slide.content.images[1].alt}
              className="w-full h-52 object-cover rounded-2xl border-2 border-dark-border shadow-xl transition-all duration-300"
              style={{
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 255, 255, 0.15)',
              }}
              loading="lazy"
            />
          </div>
          
          <h3 className="text-2xl text-primary mt-6 mb-4 font-bold">👥 Соціальні факти</h3>
          <ul className="text-base list-none space-y-4">
            {slide.content.social.map((fact, index) => (
              <li key={index} className="mb-4 leading-relaxed transition-all duration-300 hover:text-primary hover:font-semibold">
                <strong className="text-lg">{fact.title}:</strong> <span className="text-gray-300">{fact.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
