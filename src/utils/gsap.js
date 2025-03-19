import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Fade in animation
export const fadeIn = (element, delay = 0, duration = 1) => {
  return gsap.from(element, {
    opacity: 0,
    duration,
    delay,
    ease: 'power2.out'
  });
};

// Fade in up animation
export const fadeInUp = (element, delay = 0, duration = 1) => {
  return gsap.from(element, {
    opacity: 0,
    y: 60,
    duration,
    delay,
    ease: 'power2.out'
  });
};

// Stagger fade in animation for multiple elements
export const staggerFadeIn = (elements, stagger = 0.2, delay = 0) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 1,
    delay,
    stagger,
    ease: 'power2.out'
  });
};

// Scroll trigger animation
export const createScrollTrigger = (element, animation) => {
  return ScrollTrigger.create({
    trigger: element,
    animation,
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  });
};

// Reveal on scroll animation
export const revealOnScroll = (element) => {
  const animation = gsap.from(element, {
    opacity: 0,
    y: 60,
    duration: 1,
    paused: true
  });

  return createScrollTrigger(element, animation);
}; 