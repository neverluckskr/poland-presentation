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
    <div className="video-slide-container w-full h-full flex flex-col items-center justify-between relative px-4 py-8 md:py-12">
      <h2 className="video-slide-title text-center font-black text-primary drop-shadow-[0_0_25px_rgba(239,68,68,1),0_4px_8px_rgba(0,0,0,0.8)] mt-4 md:mt-8" style={{ fontWeight: 900 }}>
        {titleLines.map((line, index) => (
          <span key={index} className="block">
            {line}
          </span>
        ))}
      </h2>

      {embedUrl ? (
        <div className="video-wrapper w-full max-w-sm md:max-w-4xl lg:max-w-6xl mx-auto flex-shrink-0">
          <div 
            className="aspect-video rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden border-2 md:border-3 border-dark-border shadow-2xl" 
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
        </div>
      ) : (
        <div className="text-center text-2xl text-gray-400" role="alert">
          <p>Відео не знайдено</p>
          {slide.content?.videoUrl && <p className="text-lg mt-4 opacity-70">{slide.content.videoUrl}</p>}
        </div>
      )}

      {slide.content?.description && (
        <p className="video-description text-sm md:text-base lg:text-lg text-gray-300 text-center max-w-2xl md:max-w-4xl px-2 mb-4 md:mb-8">
          {slide.content.description}
        </p>
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