/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (func: any, timeout = 300) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const lerp = (start: number, end: number, damping: number) =>
  start * (1 - damping) + end * damping;

export const mapRange = (
  number: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) => ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
