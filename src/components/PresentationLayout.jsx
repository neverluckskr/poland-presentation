import PropTypes from 'prop-types';
import Topbar from './Topbar';
import SlideContainer from './SlideContainer';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';
import ToastContainer from './ToastContainer';
import ParticlesCanvas from './ParticlesCanvas';

const VARIANT_CONFIG = {
  desktop: {
    containerClassName: 'desktop-version',
    mainClassName:
      'flex-1 px-3 sm:px-5 lg:px-8 py-2 sm:py-4 flex items-center justify-center overflow-hidden relative',
    ariaLabel: 'Презентация о Республике Польша (настольная версия)',
  },
  mobile: {
    containerClassName: 'mobile-version',
    mainClassName: 'flex-1 px-2 py-2 flex items-center justify-center overflow-hidden relative',
    ariaLabel: 'Презентация о Республике Польша (мобильная версия)',
  },
};

export default function PresentationLayout({
  variant = 'desktop',
  loading,
  isFullscreen = false,
  topbarProps,
  slideContainerProps,
  footerProps,
}) {
  const config = VARIANT_CONFIG[variant] ?? VARIANT_CONFIG.desktop;

  return (
    <>
      {loading && <LoadingScreen />}
      <ParticlesCanvas />
      <div
        className={`presentation-container relative z-10 flex flex-col h-screen ${config.containerClassName} ${
          isFullscreen ? 'fullscreen' : ''
        }`}
        role="application"
        aria-label={config.ariaLabel}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-24 w-72 h-72 rounded-full bg-primary/25 blur-3xl animate-pulse" />
          <div className="absolute bottom-[-25%] right-[-20%] w-96 h-96 rounded-full bg-blue-500/25 blur-[140px] animate-[pulse_10s_infinite]" />
        </div>

        <Topbar {...topbarProps} />

        <main
          className={`${config.mainClassName} transition-all duration-500`}
          role="main"
          aria-label="Основной контент презентации"
        >
          <div className="w-full h-full flex items-center justify-center">
            <SlideContainer {...slideContainerProps} />
          </div>
        </main>

        <Footer {...footerProps} />
      </div>
      <ToastContainer />
    </>
  );
}

PresentationLayout.propTypes = {
  variant: PropTypes.oneOf(['desktop', 'mobile']),
  loading: PropTypes.bool,
  isFullscreen: PropTypes.bool,
  topbarProps: PropTypes.shape({}).isRequired,
  slideContainerProps: PropTypes.shape({}).isRequired,
  footerProps: PropTypes.shape({}).isRequired,
};

PresentationLayout.defaultProps = {
  variant: 'desktop',
  loading: false,
  isFullscreen: false,
};
