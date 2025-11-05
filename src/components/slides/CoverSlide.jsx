import PropTypes from 'prop-types';
import AnimatedNumber from '../AnimatedNumber';

export default function CoverSlide({ slide, isActive }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 xs:p-6 sm:p-8 bg-gradient-to-br from-dark-bg/75 via-dark-bg/65 to-dark-bg/75 backdrop-blur-lg rounded-[32px]">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black text-white mb-3 xs:mb-4 animate-float drop-shadow-[0_5px_20px_rgba(255,107,122,0.5)]">
          {slide.title}
        </h1>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-primary mb-6 xs:mb-8 sm:mb-10 md:mb-12 drop-shadow-[0_0_25px_rgba(239,68,68,0.8)] animate-pulse-slow">
          {slide.subtitle}
        </h2>

        <div className="text-center mt-6 xs:mt-8 sm:mt-10 md:mt-12">
          <p className="text-lg xs:text-xl sm:text-2xl font-bold mb-1 xs:mb-2">Презентацію розробив:</p>
          <p className="mt-1 xs:mt-2 text-base xs:text-lg sm:text-xl opacity-95">{slide.content.developer}</p>

          <hr className="w-3/5 mx-auto my-4 xs:my-6 sm:my-8 border-none border-t-2 border-white/25 rounded-full" aria-hidden="true" />

          <p className="text-lg xs:text-xl sm:text-2xl font-bold mb-1 xs:mb-2">Матеріали підготували:</p>
          <p className="mt-1 xs:mt-2 text-xs xs:text-sm sm:text-base md:text-lg opacity-95 leading-tight">{slide.content.materials}</p>

          <p className="mt-4 xs:mt-6 sm:mt-8 text-4xl xs:text-5xl sm:text-6xl" style={{ animation: 'heartBeat 1.5s ease-in-out infinite' }} aria-hidden="true">♥</p>

          <p className="mt-3 xs:mt-4 sm:mt-5 text-xs xs:text-sm sm:text-base opacity-80">
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
