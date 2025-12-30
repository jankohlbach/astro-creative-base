/*
 * Classic debounce function to limit how often a function can fire
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  timeout = 300,
) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

/**
 * Linear interpolation between two values
 */
export const lerp = (start: number, end: number, damping: number) =>
  start * (1 - damping) + end * damping;

/**
 * Map a number from one range to another
 */
export const mapRange = (
  number: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) => ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

/**
 * Calculate fluid values using the same logic as CSS clamp-fluid function
 * Mirrors the behavior of the SCSS clamp-fluid mixin
 */

// Fluid breakpoint constants (matching CSS variables)
const FLUID_MIN = 375;
const FLUID_MAX = 1720;

export const clampFluid = (
  start: number,
  end: number,
  round = true,
): number => {
  // if (!import.meta.client) {
  //   // Return middle value for SSR
  //   return round ? Math.round((start + end) / 2) : (start + end) / 2;
  // }

  const vw = window.innerWidth;

  // Clamp the viewport width between min and max
  const clampedVw = Math.max(FLUID_MIN, Math.min(FLUID_MAX, vw));

  // Calculate the fluid value using linear interpolation
  const progress = (clampedVw - FLUID_MIN) / (FLUID_MAX - FLUID_MIN);
  const fluidValue = start + (end - start) * progress;

  return round ? Math.round(fluidValue) : fluidValue;
};

/*
 * Utilities mirroring scss mixins
 */
export const hasHover = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export const hasMotion = () =>
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
