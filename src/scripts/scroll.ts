import Lenis from 'lenis';

const lenis = new Lenis();

const raf = (time: number) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);

export const scrollStop = () => {
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  document.body.style.paddingRight = `${scrollBarWidth}px`;
  document.body.style.overflowY = 'hidden';
  lenis.stop();
};

export const scrollStart = () => {
  document.body.style.paddingRight = '';
  document.body.style.overflowY = '';
  lenis.start();
};
