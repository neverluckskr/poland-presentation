import { useState, useEffect } from 'react';

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState(() => {
    if (typeof window === 'undefined') {
      return { isMobile: false, isTablet: false, isDesktop: true, deviceType: 'desktop' };
    }
    
    const width = window.innerWidth;
    if (width < 768) {
      return { isMobile: true, isTablet: false, isDesktop: false, deviceType: 'mobile' };
    } else if (width < 1024) {
      return { isMobile: false, isTablet: true, isDesktop: false, deviceType: 'tablet' };
    } else {
      return { isMobile: false, isTablet: false, isDesktop: true, deviceType: 'desktop' };
    }
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType({ isMobile: true, isTablet: false, isDesktop: false, deviceType: 'mobile' });
      } else if (width < 1024) {
        setDeviceType({ isMobile: false, isTablet: true, isDesktop: false, deviceType: 'tablet' });
      } else {
        setDeviceType({ isMobile: false, isTablet: false, isDesktop: true, deviceType: 'desktop' });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
}

