import PropTypes from 'prop-types';
import AnimatedNumber from '../AnimatedNumber';

export default function CoverSlide({ slide, isActive }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-dark-bg/75 via-dark-bg/65 to-dark-bg/75 backdrop-blur-lg rounded-[32px]">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-7xl font-black text-white mb-4 animate-float drop-shadow-[0_5px_20px_rgba(255,107,122,0.5)]">
          {slide.title}
        </h1>
        <h2 className="text-4xl font-extrabold text-primary mb-12 drop-shadow-[0_0_25px_rgba(239,68,68,0.8)] animate-pulse-slow">
          {slide.subtitle}
        </h2>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold mb-2">Презентацію розробив:</p>
          <p className="mt-2 text-xl opacity-95">{slide.content.developer}</p>

          <hr className="w-3/5 mx-auto my-8 border-none border-t-2 border-white/25 rounded-full" aria-hidden="true" />

          <p className="text-2xl font-bold mb-2">Матеріали підготували:</p>
          <p className="mt-2 text-lg opacity-95">{slide.content.materials}</p>

          <p className="mt-8 text-6xl" style={{ animation: 'heartBeat 1.5s ease-in-out infinite' }} aria-hidden="true">♥</p>

          <p className="mt-5 text-base opacity-80">
            Усі матеріали підготовлено на основі відкритих та офіційних інтернет-джерел.
          </p>
        </div>
      </div>
    </div>
  );
}

CoverSlide.propTypes = {
  slide: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    content: PropTypes.shape({
      developer: PropTypes.string.isRequired,
      materials: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
};
