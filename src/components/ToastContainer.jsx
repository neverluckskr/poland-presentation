import { useState, useEffect } from 'react';

const icons = {
  info: '🔵',
  success: '✅',
  warning: '⚠️',
  error: '❌',
};

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleToast = (e) => {
      const toast = e.detail;
      setToasts(prev => [...prev, toast]);
    };

    const handleRemove = (e) => {
      const { id } = e.detail;
      setToasts(prev => prev.filter(t => t.id !== id));
    };

    window.addEventListener('toast', handleToast);
    window.addEventListener('toast-remove', handleRemove);

    return () => {
      window.removeEventListener('toast', handleToast);
      window.removeEventListener('toast-remove', handleRemove);
    };
  }, []);

  return (
    <div className="fixed top-20 right-5 z-[10001] flex flex-col gap-2.5">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`
            glass px-4 py-3 rounded-xl border flex items-center gap-3
            min-w-[280px] shadow-lg
            transform translate-x-full opacity-0 transition-all duration-300
            animate-slide-in
            border-l-4
            ${toast.type === 'success' ? 'border-l-green-500' : ''}
            ${toast.type === 'error' ? 'border-l-red-500' : ''}
            ${toast.type === 'warning' ? 'border-l-yellow-500' : ''}
            ${toast.type === 'info' ? 'border-l-blue-500' : ''}
          `}
          style={{
            animation: 'slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
          }}
          onAnimationEnd={() => {
            setTimeout(() => {
              const removeEvent = new CustomEvent('toast-remove', { detail: { id: toast.id } });
              window.dispatchEvent(removeEvent);
            }, 2700);
          }}
        >
          <span className="text-2xl">{icons[toast.type]}</span>
          <span className="text-gray-100 text-sm font-semibold">{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
