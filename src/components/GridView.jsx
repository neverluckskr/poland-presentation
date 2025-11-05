export default function GridView({ slides, currentIndex, onSlideClick, onClose }) {
  return (
    <section
      className="absolute inset-0 glass rounded-[32px] z-[100] overflow-y-auto p-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 animate-fade-in"
      aria-hidden={false}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          onClick={() => {
            onSlideClick(index);
            onClose();
          }}
          className={`
            border border-dark-border rounded-2xl glass cursor-pointer
            overflow-hidden transition-all duration-400 ease-out
            hover:-translate-y-3 hover:scale-[1.03] hover:rotate-y-[5deg]
            hover:shadow-[0_25px_50px_-20px_rgba(239,68,68,0.6),0_0_50px_rgba(239,68,68,0.3)]
            hover:border-primary/60
            ${index === currentIndex ? 'border-primary/80 shadow-[0_0_30px_rgba(239,68,68,0.5)]' : ''}
          `}
        >
          <h3 className="m-0 text-base p-4 bg-white/8 border-b border-dark-border flex items-center gap-2 hover:bg-primary/15 hover:text-primary transition-all">
            <span className="bg-primary/30 text-primary px-2 py-1 rounded-md text-xs font-extrabold">
              {index + 1}
            </span>
            <span className="flex-1">{slide.title}</span>
          </h3>
          <div className="p-4 transform scale-[0.2] origin-top-left h-36 pointer-events-none overflow-hidden">
            <div className="opacity-50 text-xs">{slide.title}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
