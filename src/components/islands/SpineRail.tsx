import { motion, useScroll, useSpring } from 'framer-motion';
const sections = [
  { id: 'hero', label: 'Start' }, { id: 'about', label: 'About' }, { id: 'services', label: 'Services' },
  { id: 'why', label: 'Why us' }, { id: 'providers', label: 'Providers' }, { id: 'testimonials', label: 'Reviews' },
  { id: 'blog', label: 'Blog' }, { id: 'contact', label: 'Contact' },
];

// Scroll progress rail fed by site.homeSections
export default function SpineRail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <div className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <div className="relative h-64 w-px bg-black/10">
        <motion.div style={{ scaleY, transformOrigin: 'top' }} className="absolute inset-0 bg-accent" />
      </div>
      <ul className="sr-only">
        {sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>)}
      </ul>
    </div>
  );
}
