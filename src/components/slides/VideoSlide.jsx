import PropTypes from 'prop-types';

export default function VideoSlide({ slide }) {
  const getVideoId = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

  const videoId = getVideoId(slide.content?.videoUrl || '');
  const embedUrl = videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : '';
  const titleLines = slide.title ? slide.title.split('\n') : [];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="video-slide-title text-center text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary mb-4 sm:mb-6 md:mb-8 mt-[-40px] xs:mt-[-50px] sm:mt-[-60px] md:mt-0 drop-shadow-[0_0_15px_rgba(239,68,68,0.8),0_2px_4px_rgba(0,0,0,0.5)]" style={{ fontWeight: '900', WebkitTextStroke: '0.5px rgba(239, 68, 68, 0.3)', textStroke: '0.5px rgba(239, 68, 68, 0.3)' }}>
        {titleLines.map((line, index) => (
          <span key={index} className="block">
            {line}
          </span>
        ))}
      </h2>
      {embedUrl ? (
        <div 
          className="w-full max-w-6xl aspect-video rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden border-2 sm:border-3 md:border-4 border-dark-border shadow-2xl" 
          style={{ boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 107, 122, 0.3)' }}
          role="region"
          aria-label="YouTube відео"
        >
          <iframe
            width="100%"
            height="100%"
            src={embedUrl}
            title={slide.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
            aria-label={`YouTube відео: ${slide.title}`}
          />
        </div>
      ) : (
        <div className="text-center text-2xl text-gray-400" role="alert">
          <p>Відео не знайдено</p>
          {slide.content?.videoUrl && <p className="text-lg mt-4 opacity-70">{slide.content.videoUrl}</p>}
        </div>
      )}
      {slide.content?.description && (
        <p className="mt-6 text-xl text-gray-300 text-center max-w-4xl">{slide.content.description}</p>
      )}
    </div>
  );
}

VideoSlide.propTypes = {
  slide: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.shape({
      videoUrl: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
};
