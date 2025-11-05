import AnimatedNumber from './AnimatedNumber';

export default function InfoCard({ card, isActive, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(card);
    }
  };

  return (
    <div 
      className="bg-white/6 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-dark-border transition-all duration-500 cursor-pointer touch-manipulation active:scale-95 hover:-translate-y-2 hover:scale-105 hover:rotate-z-[2deg] hover:border-primary/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(239,68,68,0.2),0_0_60px_rgba(239,68,68,0.3)] hover:bg-white/10 focus:border-primary/80 focus:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(239,68,68,0.2),0_0_60px_rgba(239,68,68,0.3)] focus:bg-white/10 relative overflow-hidden group"
      onClick={handleClick}
      onTouchStart={(e) => {
        e.currentTarget.classList.add('touch-active');
        e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.8)';
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), inset 0 0 40px rgba(239,68,68,0.2), 0 0 60px rgba(239,68,68,0.3)';
      }}
      onTouchEnd={(e) => {
        setTimeout(() => {
          e.currentTarget.classList.remove('touch-active');
          e.currentTarget.style.borderColor = '';
          e.currentTarget.style.backgroundColor = '';
          e.currentTarget.style.boxShadow = '';
        }, 200);
      }}
      tabIndex={0}
      role="button"
      aria-label={`Картка: ${card.label}`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full group-focus:translate-x-full transition-transform duration-800" />
      <strong className="block text-sm sm:text-base text-primary mb-1 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
        {card.label}
      </strong>
      <span className="text-lg sm:text-xl font-extrabold inline-block" style={{ animation: 'numberFloat 3s ease-in-out infinite' }}>
        {card.animated && isActive ? (
          <>
            <AnimatedNumber value={card.value} decimals={card.value.includes('.') ? 1 : 0} isActive={isActive} />
            {card.unit}
          </>
        ) : (
          <>
            {card.value}
            {card.unit && ` ${card.unit}`}
          </>
        )}
      </span>
    </div>
  );
}
