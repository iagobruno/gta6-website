import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ScrollSmoother.create({
//   smooth: 1,
// });

const heroSection = document.querySelector('section#hero')!;
const heroBg = heroSection.querySelector('.background');
const heroLogo = heroSection.querySelector('.logo');
const heroMask = heroSection.querySelector('.hero-mask');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: heroSection,
    start: 'top top',
    end: '+=5000',
    scrub: 1.2,
    pin: true,
  },
  defaults: {
    ease: 'none',
    delay: 0,
  },
});

tl.fromTo(
  heroSection,
  {
    scale: 1.25,
  },
  {
    scale: 1,
  },
  0,
);

tl.fromTo(
  heroLogo,
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 0.1,
  },
  0,
);

tl.fromTo(
  heroBg,
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 0.1,
  },
  0.2,
);

tl.fromTo(
  heroMask,
  {
    maskSize: '4200svh',
  },
  {
    maskSize: '28svh',
    duration: 0.43,
    ease: 'expo.out',
  },
  0.1,
);

tl.fromTo(
  '.hero-text',
  {
    backgroundImage: `radial-gradient(
          circle at 50% 200vh,
          rgba(255, 214, 135, 0) 0,
          rgba(157, 47, 106, 0.5) 90vh,
          rgba(157, 47, 106, 0.8) 120vh,
          rgba(32, 31, 66, 0) 150vh
        )`,
  },
  {
    backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh,
     rgb(247, 77, 82) 50.011vh,
      rgb(145, 42, 105) 90.0183vh,
       rgba(32, 31, 66, 0) 140.599vh)`,
    duration: 1,
  },
  0.2,
);

tl.fromTo(
  '.hero-logo',

  {
    opacity: 0,
    maskImage: `radial-gradient(circle at 50% 145.835%, rgb(0, 0, 0) 36.11%, rgba(0, 0, 0, 0) 68.055%)`,
  },
  {
    opacity: 1,
    maskImage: `radial-gradient(
    circle at 50% 105.594%,
    rgb(0, 0, 0) 62.9372%,
    rgba(0, 0, 0, 0) 81.4686%
  )`,
    duration: 0.8,
  },
  '<0.2',
);

tl.fromTo(
  heroSection,
  {
    maskImage: `radial-gradient(circle at 50% 16.1137vh, rgb(0, 0, 0) 96.1949vh, rgba(0, 0, 0, 0) 112.065vh)`,
  },
  {
    maskImage: `radial-gradient(circle at 50% -60vh, rgb(0, 0, 0) 0vh, rgba(0, 0, 0, 0) 80vh)`,
    duration: 1,
  },
  1,
);

const JasonCharacter = document.querySelector('section#character');

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: JasonCharacter,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1.2,
    pin: '#jason',
  },
  defaults: {
    ease: 'none',
    delay: 0,
  },
});

tl2.fromTo(
  '#jason',
  {
    opacity: 0,
    filter: 'blur(50px)',
  },
  {
    opacity: 1,
    filter: 'blur(0px)',
    duration: 0.1,
  },
  0,
);

// Scroll Indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
gsap.to(scrollIndicator, {
  y: -20,
  opacity: 0.6,
  duration: 1,
  ease: 'power1.inOut',
  repeat: -1,
  yoyo: true,
});
