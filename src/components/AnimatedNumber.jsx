import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function AnimatedNumber({ value, decimals = 1, isActive }) {
  const [current, setCurrent] = useState(0);
  const target = parseFloat(value);

  useEffect(() => {
    if (!isActive) return;

    const duration = 2500;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      setCurrent(current);
    }, 16);

    return () => clearInterval(timer);
  }, [target, isActive]);

  if (target > 1000) {
    return <span>{Math.floor(current).toLocaleString()}</span>;
  }
  
  return <span>{current.toFixed(decimals)}</span>;
}

AnimatedNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  decimals: PropTypes.number,
  isActive: PropTypes.bool,
};

AnimatedNumber.defaultProps = {
  decimals: 1,
  isActive: true,
};
