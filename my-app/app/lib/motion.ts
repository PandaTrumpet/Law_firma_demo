// src/lib/motion.ts
import { useReducedMotion } from "motion/react";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type MotionOpts = {
  /** общий сдвиг по Y для элементов */
  y?: number;
  /** задержка перед стартом */
  delay?: number;
  /** шаг стаггера */
  stagger?: number;
  /** длительность анимации элемента */
  duration?: number;
};

/**
 * Хелпер под ваш стиль: мягкое появление + лёгкий подъём + stagger.
 * Использование:
 * const reduce = useReducedMotion();
 * const { container, item, fadeUp, viewport } = getMotion(reduce);
 */
export function getMotion(
  reduce: boolean,
  opts: MotionOpts = {},
): {
  container: any;
  item: any;
  fadeUp: any;
  viewport: { once: boolean; amount: number };
} {
  const y = opts.y ?? 16;
  const delay = opts.delay ?? 0.12;
  const stagger = opts.stagger ?? 0.08;
  const duration = opts.duration ?? 0.7;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduce
        ? { duration: 0.01 }
        : { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y },
    show: reduce
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration, ease: EASE } },
  };

  // для блоков (карточки/колонки) без вложенного stagger
  const fadeUp = {
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: Math.min(18, y) },
    whileInView: reduce
      ? { opacity: 1, y: 0 }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: EASE },
        },
  };

  const viewport = { once: true, amount: 0.28 };

  return { container, item, fadeUp, viewport };
}

/**
 * Удобный хук-обёртка, чтобы не таскать reduce вручную.
 * Использование:
 * const m = useMotion();
 * <motion.div variants={m.container} ... />
 */
export function useMotion(opts?: MotionOpts) {
  const reduce = useReducedMotion();
  return getMotion(!!reduce, opts);
}
