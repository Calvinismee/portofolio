import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimationContext from './AnimationContext';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const AnimationProvider = ({ children }) => {
  // Define reusable animations
  const animations = {
    fadeIn: (element, delay = 0, duration = 1) => {
      return gsap.fromTo(element, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration, delay, ease: "power2.out" }
      );
    },
    
    staggerFromBottom: (elements, delay = 0, stagger = 0.2, duration = 0.8) => {
      return gsap.fromTo(elements, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration, delay, stagger, ease: "power2.out" }
      );
    },
    
    fadeInScroll: (element, trigger, start = "top 80%", duration = 1) => {
      return gsap.fromTo(element, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration, 
          ease: "power2.out",
          scrollTrigger: {
            trigger,
            start,
            toggleActions: "play none none none"
          }
        }
      );
    },
    
    staggerFromBottomScroll: (elements, trigger, start = "top 80%", stagger = 0.2, duration = 0.8) => {
      return gsap.fromTo(elements, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration, 
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger,
            start,
            toggleActions: "play none none none"
          }
        }
      );
    },
  };

  return (
    <AnimationContext.Provider value={animations}>
      {children}
    </AnimationContext.Provider>
  );
};
