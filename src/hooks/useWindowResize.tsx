import { useEffect, useMemo, useState } from 'react';

import { MOBILE_WIDTH } from '@/constants/app';

interface Size {
  width: number;
  height: number;
}

export function useWindowResize(): Size & { isMobileScreen: boolean } {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobileScreen = useMemo(() => {
    return windowSize.width <= MOBILE_WIDTH;
  }, [windowSize]);

  return { ...windowSize, isMobileScreen };
}
