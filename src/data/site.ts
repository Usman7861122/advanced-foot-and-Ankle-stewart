export const site = {
  name: 'Advanced Foot & Ankle Specialists',
  clinic: 'Advanced Foot & Ankle Specialists',
  short: 'Advanced Foot & Ankle',
  url: 'https://www.advancedfootankle.com',
  tagline: 'Expert foot and ankle care in Chandler, Arizona.',
  description:
    'Board-certified podiatrists and surgeons in Chandler, AZ. Heel pain, bunions, sports injuries, diabetic foot care, custom orthotics and MLS laser therapy. Book your visit today.',
  phone: '480-963-9000',
  phoneHref: 'tel:+14809639000',
  fax: '480-963-0375',
  address: { street: '595 N Dobson Road, Suite D71', city: 'Chandler', state: 'AZ', zip: '85224' },
  hours: [
    { day: 'Monday – Thursday', time: '8:00 AM – 5:00 PM', days: [1, 2, 3, 4] },
    { day: 'Friday', time: '8:00 AM – 12:00 PM', days: [5] },
    { day: 'Saturday – Sunday', time: 'Closed', days: [6, 0] },
  ],
  // One booking link for every Book button. TODO: replace with the real booking page.
  bookingUrl: '/contact#appointment',
  // TODO: connect the contact form (Formspree, Netlify Forms, your own API ...)
  contactApi: '',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services', mega: 'services' as const },
    { label: 'Conditions', href: '/conditions', mega: 'conditions' as const },
    { label: 'Providers', href: '/providers', mega: 'providers' as const },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const providers = [
  {
    slug: 'alex-stewart',
    name: 'Alex Stewart, DPM',
    role: 'Board-certified podiatrist and surgeon',
    short: 'Foot and ankle trauma, diabetic care, reconstructive surgery and sports medicine. Ten years in private practice in Arizona, with 24/7 emergency care for sports injuries.',
    creds: 'DPM, Midwestern University · Residency, UT Health San Antonio',
    img: '/images/provider-stewart.jpg',
    bio: 'Dr. Stewart is a board-certified surgeon for foot and ankle trauma, diabetic care, reconstructive surgery and sports medicine. He has been in private practice in Arizona for ten years and helps train podiatrists at the Carl T. Hayden VAMC Surgical Residency Program in Phoenix. He earned his DPM at Midwestern University in Glendale, Arizona, and finished his residency at the University of Texas Health Science Center in San Antonio. He volunteers at local sports events, is a former college baseball player and loves golf. He offers 24/7 emergency care for sports injuries and trauma.',
    focus: ['Trauma and sports medicine', 'Diabetic care', 'Reconstructive surgery'],
  },
  {
    slug: 'antonius-su',
    name: 'Antonius Su, DPM',
    role: 'Founder · Board-certified in foot surgery',
    short: 'Founded the practice in Chandler in 1998. He keeps patients\' feet healthy for life, so they can live every day to the fullest.',
    creds: 'DPM, California School of Podiatric Medicine · Surgical residency, Santa Ana',
    img: '/images/provider-su.jpg',
    bio: 'Dr. Su founded Advanced Foot and Ankle Specialists of Arizona in Chandler in 1998. He is board-certified in foot surgery. His goal is to help patients live their lives to the fullest by keeping their feet healthy. He studied at San Francisco State University and the California School of Podiatric Medicine in Oakland, then did two years of surgical residency at Western Medical Trauma Center in Santa Ana and three years caring for U.S. Air Force members in Fairfield, California. He lives in Chandler with his wife and three children.',
    focus: ['Foot surgery', 'Founder, since 1998', 'Surgical residency trained'],
  },
];

// TODO: replace these short quotes with the exact words from the old website.
export const testimonials = [
  { name: 'Fredrick S.', text: 'Dr. Stewart is great. The office is efficient, and the follow-up care was truly helpful.' },
  { name: 'Laurie O.', text: 'Dr. Stewart really listens, and his suggestions made a real difference.' },
  { name: 'Amanda S.', text: 'Friendly, knowledgeable, and I was seen the very next day.' },
  { name: 'John S.', text: 'The staff are friendly, prompt and attentive from the moment you walk in.' },
  { name: 'Kim D.', text: 'My ingrown toenail was treated without pain and healed beautifully.' },
  { name: 'Jacci C.', text: 'Dr. Stewart is kind, caring and so easy to talk to.' },
  { name: 'Tre F.', text: 'Dr. Su explained everything clearly and gave me alternatives for my pain.' },
  { name: 'Lynne H.', text: 'Dr. Su is caring and never rushed. He even made me laugh.' },
  { name: 'Thomas E.', text: 'Simple, easy-to-understand guidance on how to heal.' },
  { name: 'Wanda B.', text: 'Every visit with Dr. Su has been a positive one.' },
];

import blogPosts from './blog-posts.json';
export const posts = blogPosts as {
  slug: string; title: string; date: string; category: string; author: string;
  excerpt: string; readTime: string; img: string; body: string[];
}[];
