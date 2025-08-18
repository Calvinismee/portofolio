/**
 * Handles scroll animations by adding CSS classes when elements enter or exit the viewport
 */

// Observer configuration for entrance animations
const observerOptions = {
  root: null, // use the viewport as the root
  rootMargin: '0px',
  threshold: 0.15 // element is considered visible when 15% is in view
};

// Observer configuration for exit animations - with negative rootMargin to trigger earlier
const exitObserverOptions = {
  root: null,
  rootMargin: '-10% 0px -10% 0px', // Start exit animation slightly before element leaves viewport
  threshold: 0
};

// Initialize the Intersection Observer
export const initScrollAnimations = () => {
  // Check for IntersectionObserver support
  if (!('IntersectionObserver' in window)) {
    // Fallback for browsers that don't support IntersectionObserver
    const animateElements = document.querySelectorAll(
      '.animate-on-scroll, .animate-fade-in, .animate-slide-left, .animate-slide-right'
    );
    animateElements.forEach(el => el.classList.add('animate-visible'));
    return;
  }

  // Create the observer instance for entrance animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the element is in view
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        entry.target.classList.remove('animate-exit');
        
        // If this is a container with children to animate
        if (entry.target.classList.contains('animate-on-scroll-container')) {
          const children = entry.target.querySelectorAll('.animate-child');
          setTimeout(() => {
            children.forEach(child => {
              child.classList.add('animate-visible');
              child.classList.remove('animate-exit');
            });
          }, 100); // Small delay for container to start animating first
        }
      }
    });
  }, observerOptions);
  
  // Create observer for exit animations
  const exitObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the element is no longer in view
      if (!entry.isIntersecting && entry.target.classList.contains('animate-visible')) {
        // Only apply exit animations to elements that have already been visible
        entry.target.classList.add('animate-exit');
        
        // If this is a container with children to animate on exit
        if (entry.target.classList.contains('animate-on-scroll-container')) {
          const children = entry.target.querySelectorAll('.animate-child');
          // Stagger the exit animations in reverse order
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-exit');
            }, index * 50); // Small delay between each child
          });
        }
      }
    });
  }, exitObserverOptions);

  // Observe elements with animation classes
  const elements = document.querySelectorAll(
    '.animate-on-scroll, .animate-fade-in, .animate-slide-left, .animate-slide-right, .animate-on-scroll-container'
  );
  elements.forEach(element => {
    // Observe for both enter and exit animations
    observer.observe(element);
    exitObserver.observe(element);
  });
};

/**
 * Add scroll animation classes to existing React components
 * @param {string} id - The ID of the section/component
 * @param {string} animationType - The type of animation (default, fade-in, slide-left, slide-right)
 */
export const addAnimationClass = (id, animationType = 'default') => {
  const element = document.getElementById(id);
  if (!element) return;
  
  switch (animationType) {
    case 'fade-in':
      element.classList.add('animate-fade-in');
      break;
    case 'slide-left':
      element.classList.add('animate-slide-left');
      break;
    case 'slide-right':
      element.classList.add('animate-slide-right');
      break;
    default:
      element.classList.add('animate-on-scroll');
  }
};
