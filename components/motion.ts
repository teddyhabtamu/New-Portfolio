import type { Transition, Variants } from 'framer-motion';

// Brutalist motion language: raw, sharp, mechanical — nothing floaty.
export const brute = [0.19, 1, 0.22, 1] as const;

export const DUR = 0.5;

// Shared viewport config so reveals trigger just as content approaches
export const VIEW = { once: true, margin: '-10%' } as const;

export const rise = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR, ease: brute, delay },
  },
});

export const fade = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DUR, ease: 'easeOut', delay } },
});

export const riseStagger: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DUR, ease: brute, delay: i * 0.06 },
  }),
};
