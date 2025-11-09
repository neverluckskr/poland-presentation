import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return Math.min(newProgress, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50 transition-opacity duration-500"
      role="status"
      aria-label="Загрузка презентации"
      aria-live="polite"
    >
      <div className="text-center">
        <div 
          className="w-16 h-16 border-4 border-gray-700 border-t-primary rounded-full animate-spin mx-auto mb-6"
          aria-hidden="true"
        ></div>
        <h2 className="text-xl text-gray-100 mb-6 animate-pulse">Загрузка презентации...</h2>
        <div 
          className="w-80 h-1.5 bg-gray-800 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={`Прогресс загрузки: ${Math.round(progress)}%`}
        >
          <div
            className="h-full bg-gradient-to-r from-primary to-red-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
