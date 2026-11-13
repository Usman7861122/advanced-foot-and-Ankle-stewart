import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { site } from '../../data/site';

const SLIDES = [
  {
    img: '/images/hero-1-runner.jpg',
    alt: 'Runner striding along rocky coastline at sunrise',
    eyebrow: 'Sports & performance podiatry',
    before: 'Stay on your feet.',
    last: 'Chase every sunrise.',
    text: 'From heel pain to ankle sprains, our board-certified podiatrists keep you moving.',
    cta: { label: 'Sports injuries', href: '/services/sports-injuries' },
    pos: '60% 40%',
  },
  {
    img: '/images/hero-2-climber.jpg',
    alt: 'Climber ascending a steep mountain rock wall',
    eyebrow: 'Strong ankles. Steady steps.',
    before: 'Every climb starts',
    last: 'from the ground up.',
    text: 'Balance, strength and healing, guided by surgeons who treat feet and ankles every day.',
    cta: { label: 'Ankle & foot care', href: '/services' },
    pos: '70% 40%',
  },
  {
    img: '/images/hero-3-clinic.jpg',
    alt: 'Podiatrist gently examining a patient’s foot in a clinic',
    eyebrow: 'Gentle, unhurried care',
    before: 'Expert foot care,',
    last: 'gently delivered.',
    text: 'Clear answers at your first visit. Simple care first, advanced options when needed.',
    cta: { label: 'Meet our providers', href: '/#providers' },
    pos: '50% 50%',
  },
];

const INTERVAL = 7500;

export default function HeroSlider() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((n: number) => setI((n + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => go(i + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [i, paused, reduce, go]);

  const s = SLIDES[i];
  const lastWords = s.last.split(' ');

  return (
    <section
      id="hero"
      aria-roledescription="carousel"
      aria-label="Featured care"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#060f24] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
          <motion.img
            src={s.img}
            alt={s.alt}
            width={2400}
            height={1350}
            fetchPriority={i === 0 ? 'high' : 'auto'}
            onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
            className="h-full w-full object-cover"
            style={{ objectPosition: s.pos }}
            initial={{ scale: reduce ? 1 : 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 9, ease: 'easeOut' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navy veil for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060f24]/90 via-[#060f24]/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060f24]/85 via-transparent to-[#060f24]/40" />

      {/* Text layer */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 pb-28 pt-28 lg:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="max-w-3xl"
          >
            <motion.p
              className="eyebrow flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              <span className="h-px w-10 bg-[#c9a96e]" aria-hidden="true" />
              {s.eyebrow}
            </motion.p>

            {/* Real h1 lives in Hero.astro for SEO; slide titles are level-2 headings */}
            <p role="heading" aria-level={2} className="mt-6 font-serif text-[clamp(2.6rem,7vw,6rem)] font-medium leading-[1.02]">
              <span className="block overflow-hidden pb-[0.18em]">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.25, duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  {s.before}
                </motion.span>
              </span>
              {/* The last words move: slide in word by word, then shimmer */}
              <span className="-ml-3 flex flex-wrap gap-x-[0.02em] overflow-hidden pb-[0.3em] pl-3 pr-3">
                {lastWords.map((w, k) => (
                  <motion.span
                    key={w + k}
                    className="shimmer inline-block"
                    initial={{ x: 90, opacity: 0, skewX: -8 }}
                    animate={{ x: 0, opacity: 1, skewX: 0 }}
                    transition={{ delay: 0.6 + k * 0.18, duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            </p>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              {s.text}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a href={site.bookingUrl} className="btn btn-book">Book Appointment</a>
              <a href={s.cta.href} className="btn btn-outline">{s.cta.label}</a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-[1400px] items-end justify-between px-6 pb-8 lg:px-10">
        <div className="flex items-center gap-3" role="tablist" aria-label="Choose slide">
          {SLIDES.map((_, n) => (
            <button
              key={n}
              type="button"
              role="tab"
              aria-selected={n === i}
              aria-label={`Slide ${n + 1}`}
              onClick={() => go(n)}
              className="group flex h-11 w-16 items-center"
            >
              <span className="relative block h-px w-full bg-white/30">
                {n === i && (
                  <motion.span
                    key={`${i}-${paused}`}
                    className="absolute inset-y-0 left-0 block h-[2px] -translate-y-px bg-[#c9a96e]"
                    initial={{ width: 0 }}
                    animate={{ width: paused || reduce ? '100%' : '100%' }}
                    transition={{ duration: paused || reduce ? 0 : INTERVAL / 1000, ease: 'linear' }}
                  />
                )}
              </span>
            </button>
          ))}
          <span className="ml-3 font-serif text-lg tabular-nums text-white/70">
            0{i + 1}<span className="text-white/30"> / 0{SLIDES.length}</span>
          </span>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <button type="button" onClick={() => go(i - 1)} aria-label="Previous slide" className="flex h-12 w-12 items-center justify-center rounded-[6px] border border-white/40 transition hover:border-[#c9a96e] hover:text-[#c9a96e]">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
          </button>
          <button type="button" onClick={() => go(i + 1)} aria-label="Next slide" className="flex h-12 w-12 items-center justify-center rounded-[6px] border border-white/40 transition hover:border-[#c9a96e] hover:text-[#c9a96e]">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
