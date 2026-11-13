import { useState, type KeyboardEvent } from 'react';

type Card = { slug: string; title: string; short: string; back: string; img: string };

export default function FlipCards({ cards }: { cards: Card[] }) {
  const [on, setOn] = useState<string | null>(null);

  const toggle = (slug: string) => setOn((cur) => (cur === slug ? null : slug));
  const key = (e: KeyboardEvent, slug: string) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(slug); }
  };

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {cards.map((c, n) => {
        const flipped = on === c.slug;
        return (
          <li key={c.slug} className="group/card [perspective:1400px]">
            <div
              role="button"
              tabIndex={0}
              aria-pressed={flipped}
              aria-label={`${c.title}. Press to flip for details.`}
              onClick={() => toggle(c.slug)}
              onKeyDown={(e) => key(e, c.slug)}
              className={`group relative aspect-square w-full cursor-pointer [transform-style:preserve-3d] transition-transform duration-[900ms] ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none ${
                flipped ? '[transform:rotateY(180deg)]' : 'md:group-hover/card:[transform:rotateY(180deg)]'
              }`}
            >
              {/* Front */}
              <div className="absolute inset-0 overflow-hidden rounded-[3px] bg-[#0b1d42] [backface-visibility:hidden]">
                <img
                  src={c.img}
                  alt=""
                  loading="lazy"
                  width={800}
                  height={800}
                  onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f24] via-[#060f24]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <p className="text-xs tracking-[0.28em] text-[#c9a96e]">0{n + 1}</p>
                  <h3 className="mt-2 font-serif text-[2rem] leading-tight">{c.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{c.short}</p>
                </div>
                <span aria-hidden="true" className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-[6px] border border-white/50 text-white/90">
                  <svg width="14" height="14" viewBox="0 0 14 14"><path d="M1 7h12M7 1v12" stroke="currentColor" strokeWidth="1.2" /></svg>
                </span>
              </div>

              {/* Back */}
              <div
                aria-hidden={!flipped}
                className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[3px] bg-[#0b1d42] p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]"
              >
                <img
                  src={c.img}
                  alt=""
                  loading="lazy"
                  width={800}
                  height={800}
                  aria-hidden="true"
                  onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
                  className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[#060f24]/85 via-[#0b1d42]/80 to-[#060f24]/90" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[3px] shadow-[inset_0_0_0_1px_rgba(201,169,110,.45)]" />
                <div className="relative">
                  <p className="eyebrow">Our care</p>
                  <h3 className="mt-3 font-serif text-[2rem] leading-tight">{c.title}</h3>
                  <div className="hairline my-5 w-16" />
                  <p className="text-white/90">{c.back}</p>
                </div>
                <a
                  href={`/services/${c.slug}`}
                  tabIndex={flipped ? 0 : -1}
                  onClick={(e) => e.stopPropagation()}
                  className="btn btn-outline relative self-start !min-h-[44px] !text-[12px]"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
