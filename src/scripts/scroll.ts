import Lenis from 'lenis';

const lenis = new Lenis({
  autoRaf: true,
});

export const scrollStop = () => {
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  document.body.style.paddingRight = `${scrollBarWidth}px`;
  document.body.style.overflowY = 'clip';
  lenis.stop();
};

export const scrollStart = () => {
  document.body.style.paddingRight = '';
  document.body.style.overflowY = '';
  lenis.start();
};
