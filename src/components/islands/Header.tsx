import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { site, providers } from '../../data/site';
import { services } from '../../data/services';
import { conditions } from '../../data/conditions';

type MegaKey = 'services' | 'conditions' | 'providers';
type ColKey = 'services' | 'conditions';

const groupBy = <T extends { group: string }>(items: T[]) =>
  items.reduce<Record<string, T[]>>((acc, i) => {
    (acc[i.group] ||= []).push(i);
    return acc;
  }, {});

const MEGA: Record<ColKey, {
  base: string;
  columns: { title: string; links: { label: string; href: string }[] }[];
  feature: { img: string; title: string; text: string };
}> = {
  services: {
    base: '/services',
    columns: Object.entries(groupBy(services)).map(([title, list]) => ({
      title,
      links: list.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
    })),
    feature: {
      img: '/images/heel-pain-exam.jpg',
      title: 'Not sure where to start?',
      text: 'Tell us where it hurts. We will guide you to the right care.',
    },
  },
  conditions: {
    base: '/conditions',
    columns: Object.entries(groupBy(conditions)).map(([title, list]) => ({
      title,
      links: list.map((c) => ({ label: c.title, href: `/conditions/${c.slug}` })),
    })),
    feature: {
      img: '/images/ankle-sprains-3.jpg',
      title: 'Clear answers, no rush',
      text: 'Your visit starts with a careful exam and a plain-English plan.',
    },
  },
};

const underline =
  'relative after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#c9a96e] after:transition-transform after:duration-500 hover:after:scale-x-100 focus-visible:after:scale-x-100';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<MegaKey | null>(null);
  const [drawer, setDrawer] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(null); setDrawer(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
  }, [drawer]);

  const enter = (k: MegaKey) => { clearTimeout(closeTimer.current); setOpen(k); };
  const leave = () => { closeTimer.current = setTimeout(() => setOpen(null), 160); };

  const solid = scrolled || open !== null || drawer;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-[background-color,box-shadow,padding] duration-500 ${
        solid ? 'bg-[#060f24]/95 shadow-[0_1px_0_rgba(201,169,110,.25)] backdrop-blur-md' : 'bg-transparent'
      }`}
      onMouseLeave={leave}
    >
      <div className={`mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 transition-[padding] duration-500 lg:px-10 ${solid ? 'py-2.5' : 'py-5'}`}>
        <a href="/" aria-label={`${site.clinic} home`} className="shrink-0">
          <img
            src="/images/logo.webp"
            alt={site.clinic}
            width={768}
            height={309}
            className={`w-auto brightness-0 invert transition-[height] duration-500 ${solid ? 'h-12' : 'h-16'}`}
          />
        </a>

        {/* Full menu only from xl (1280px) */}
        <nav aria-label="Main" className="hidden items-center gap-9 xl:flex">
          {site.nav.map((n) =>
            n.mega ? (
              <div key={n.label} onMouseEnter={() => enter(n.mega!)} className="relative">
                <a
                  href={n.href}
                  aria-haspopup="true"
                  aria-expanded={open === n.mega}
                  onFocus={() => enter(n.mega!)}
                  className={`flex items-center gap-1.5 py-3 text-[13px] uppercase tracking-[0.18em] ${underline}`}
                >
                  {n.label}
                  <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true" className={`transition-transform duration-300 ${open === n.mega ? 'rotate-180' : ''}`}>
                    <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </a>
              </div>
            ) : (
              <a key={n.label} href={n.href} onMouseEnter={() => setOpen(null)} className={`py-3 text-[13px] uppercase tracking-[0.18em] ${underline}`}>
                {n.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-6 xl:flex">
          <a href={site.phoneHref} className={`text-sm tracking-wide ${underline}`}>{site.phone}</a>
          <a href={site.bookingUrl} className="btn btn-book !min-h-[44px] !px-6 !text-[12px]">Book Appointment</a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center xl:hidden"
          aria-label={drawer ? 'Close menu' : 'Open menu'}
          aria-expanded={drawer}
          onClick={() => setDrawer((d) => !d)}
        >
          <span className="relative block h-3 w-7" aria-hidden="true">
            <span className={`absolute left-0 h-px w-7 bg-white transition-all duration-300 ${drawer ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-1.5 h-px w-7 bg-white transition-opacity duration-300 ${drawer ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 h-px w-7 bg-white transition-all duration-300 ${drawer ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </div>

      {/* ---------- Mega menu ---------- */}
      <AnimatePresence>
        {open && open !== 'providers' && (
          <motion.div
            key={open}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onMouseEnter={() => enter(open)}
            className="absolute inset-x-0 top-full hidden border-t border-[#c9a96e]/25 bg-[#060f24] xl:block"
          >
            <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_340px] gap-14 px-10 py-12">
              <div className={`grid gap-10 ${MEGA[open].columns.length > 3 ? 'grid-cols-4' : 'grid-cols-3'}`}>
                {MEGA[open].columns.map((col, ci) => (
                  <div key={col.title}>
                    <p className="eyebrow mb-5">{col.title}</p>
                    <ul className="space-y-0.5">
                      {col.links.map((l, li) => (
                        <motion.li
                          key={l.href}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.03 * (ci * 3 + li), duration: 0.3 }}
                        >
                          <a
                            href={l.href}
                            className="group flex items-center gap-3 py-1.5 font-serif text-[1.35rem] text-white/85 transition-all duration-300 hover:translate-x-1.5 hover:text-[#c9a96e]"
                          >
                            <span className="h-px w-0 bg-[#c9a96e] transition-all duration-300 group-hover:w-5" aria-hidden="true" />
                            {l.label}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-span-full">
                  <a href={MEGA[open].base} className="link-line inline-block text-[12px] uppercase tracking-[0.2em] text-[#c9a96e]">
                    View all {open} →
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[3px] bg-[#0b1d42]">
                <img
                  src={MEGA[open].feature.img}
                  alt=""
                  loading="lazy"
                  onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
                  className="absolute inset-0 h-full w-full object-cover object-[52%_40%] opacity-60 transition-transform duration-[1500ms] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f24] via-[#060f24]/50 to-transparent" />
                <div className="relative flex h-full min-h-[300px] flex-col justify-end p-7">
                  <p className="font-serif text-3xl">{MEGA[open].feature.title}</p>
                  <p className="mt-2 text-sm text-white/75">{MEGA[open].feature.text}</p>
                  <a href={site.bookingUrl} className="btn btn-book mt-5 self-start !min-h-[44px] !text-[12px]">Book Appointment</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------- Providers menu ---------- */}
      <AnimatePresence>
        {open === 'providers' && (
          <motion.div
            key="providers"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onMouseEnter={() => enter('providers')}
            className="absolute inset-x-0 top-full hidden border-t border-[#c9a96e]/25 bg-[#060f24] xl:block"
          >
            <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_340px] gap-14 px-10 py-12">
              <div>
                <p className="eyebrow mb-6">Our providers</p>
                <ul className="grid grid-cols-2 gap-8">
                  {providers.map((p, i) => (
                    <motion.li key={p.slug} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 * i, duration: 0.3 }}>
                      <a href={`/providers/${p.slug}`} className="group flex items-center gap-5">
                        <img src={p.img} alt="" loading="lazy" className="h-24 w-24 shrink-0 rounded-[3px] object-cover object-[50%_12%] transition-transform duration-500 group-hover:scale-[1.04]" />
                        <span>
                          <span className="block font-serif text-[1.5rem] text-white/90 transition-colors duration-300 group-hover:text-[#c9a96e]">{p.name}</span>
                          <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-white/55">{p.role}</span>
                          <span className="mt-3 inline-block text-[11px] uppercase tracking-[0.22em] text-[#c9a96e]">View profile →</span>
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a href="/providers" className="link-line inline-block text-[12px] uppercase tracking-[0.2em] text-[#c9a96e]">Meet the whole team →</a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[3px] bg-[#0b1d42]">
                <img src="/images/about-story.jpg" alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f24] via-[#060f24]/50 to-transparent" />
                <div className="relative flex h-full min-h-[240px] flex-col justify-end p-7">
                  <p className="font-serif text-3xl">Two surgeons, one plan</p>
                  <p className="mt-2 text-sm text-white/75">Dr. Stewart and Dr. Su plan your care together.</p>
                  <a href={site.bookingUrl} className="btn btn-book mt-5 self-start !min-h-[44px] !text-[12px]">Book Appointment</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------- Mobile drawer ---------- */}
      <AnimatePresence>
        {drawer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 bottom-0 top-[64px] overflow-y-auto bg-[#060f24] px-6 pb-28 pt-6 xl:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="divide-y divide-white/10">
                {site.nav.map((n, i) => (
                  <motion.li key={n.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * i }}>
                    <a href={n.href} onClick={() => setDrawer(false)} className="block py-4 font-serif text-3xl">{n.label}</a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a href={site.bookingUrl} className="btn btn-book">Book Appointment</a>
              <a href={site.phoneHref} className="btn btn-outline">Call {site.phone}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
