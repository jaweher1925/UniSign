import { useSpring as useReactSpring } from 'react-spring';
import { animated as reactAnimated } from 'react-spring';

// Re-export the animation hooks and components from react-spring
export const useSpring = useReactSpring;
export const animated = reactAnimated;

// Animation utility functions
export const getAnimationDuration = (speed: 'slow' | 'normal' | 'fast'): number => {
  switch(speed) {
    case 'slow': return 2000;
    case 'normal': return 1000;
    case 'fast': return 500;
    default: return 1000;
  }
};

// Easing functions
export const easings = {
  easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeOut: (t: number) => 1 - Math.pow(1 - t, 3),
  easeIn: (t: number) => t * t * t,
  bounce: (t: number) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (t < 1 / d1) {
      return n1 * t * t;
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
  }
};