export default function IconButton({ onClick, disabled, ariaLabel, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-lg sm:rounded-xl
        border border-dark-border bg-white/5 text-gray-100
        cursor-pointer transition-all duration-300 ease-out touch-manipulation
        hover:bg-white/10 hover:border-primary/60 hover:-translate-y-1 hover:scale-110
        hover:shadow-[0_10px_30px_rgba(239,68,68,0.5),0_0_0_4px_rgba(239,68,68,0.15)]
        active:translate-y-0 active:scale-105
        disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none
        relative overflow-hidden group
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 relative z-10 filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
      >
        {children}
      </svg>
    </button>
  );
}
