import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

type T = { name: string; text: string };

export default function TestimonialCarousel({ items }: { items: T[] }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (n: number) => setI((n + items.length) % items.length);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => go(i + 1), 6500);
    return () => clearTimeout(t);
  }, [i, paused, reduce]);

  const t = items[i];
  return (
    <div
      className="relative max-w-2xl text-left"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Patient stories"
    >
      <span aria-hidden="true" className="block font-serif text-[5rem] leading-none text-[#c9a96e]/60">“</span>
      <div className="min-h-[260px]" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55 }}
          >
            <blockquote className="font-serif text-[clamp(1.6rem,2.8vw,2.4rem)] italic leading-snug">{t.text}</blockquote>
            <figcaption className="mt-8 text-xs uppercase tracking-[0.3em] text-[#c9a96e]">{t.name} · Verified patient</figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center gap-5">
        <button type="button" aria-label="Previous story" onClick={() => go(i - 1)} className="flex h-12 w-12 items-center justify-center rounded-[6px] border border-current/40 transition hover:border-[#c9a96e] hover:text-[#c9a96e]">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
        </button>
        <div className="flex gap-1" role="tablist" aria-label="Choose story">
          {items.map((_, n) => (
            <button key={n} type="button" role="tab" aria-selected={n === i} aria-label={`Story ${n + 1}`} onClick={() => setI(n)} className="flex h-11 w-5 items-center justify-center">
              <span className={`block h-1.5 rounded-full transition-all duration-500 ${n === i ? 'w-6 bg-[#c9a96e]' : 'w-1.5 bg-current/30'}`} />
            </button>
          ))}
        </div>
        <button type="button" aria-label="Next story" onClick={() => go(i + 1)} className="flex h-12 w-12 items-center justify-center rounded-[6px] border border-current/40 transition hover:border-[#c9a96e] hover:text-[#c9a96e]">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
        </button>
      </div>
    </div>
  );
}
