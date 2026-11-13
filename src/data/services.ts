export type Service = {
  slug: string;
  title: string;
  group: 'Pain & Injury' | 'Skin & Nails' | 'Specialty Care';
  summary: string;
};

export const services: Service[] = [
  { slug: 'heel-pain', title: 'Heel Pain', group: 'Pain & Injury', summary: 'Sharp or aching heel pain can make every first step of the day hard. We find the cause and treat it, starting with simple care.' },
  { slug: 'plantar-fasciitis', title: 'Plantar Fasciitis', group: 'Pain & Injury', summary: 'Pain under the heel and arch, often worst in the morning. Stretching, supports, laser therapy and other gentle options can bring relief.' },
  { slug: 'sports-injuries', title: 'Sports Injuries', group: 'Pain & Injury', summary: 'Sprains, strains and overuse injuries need the right plan to heal well. We help runners, hikers and weekend athletes get back to what they love.' },
  { slug: 'fractures', title: 'Fractures', group: 'Pain & Injury', summary: 'Broken bones in the foot or ankle need careful care. We protect the bone, guide healing and talk through all options with you.' },
  { slug: 'tendonitis', title: 'Tendonitis', group: 'Pain & Injury', summary: 'Sore, swollen tendons around the foot and ankle respond best to early care. We calm the pain and treat the cause.' },
  { slug: 'arthritis', title: 'Arthritis', group: 'Pain & Injury', summary: 'Stiff, painful joints do not have to slow you down. We offer pain management and supportive care for foot and ankle arthritis.' },
  { slug: 'gout', title: 'Gout', group: 'Pain & Injury', summary: 'Sudden, intense pain in the big toe is a classic sign of gout. We treat the flare and help you lower the chance of the next one.' },
  { slug: 'bunions', title: 'Bunions', group: 'Pain & Injury', summary: 'A bump at the base of the big toe can hurt and make shoes hard to wear. We start with simple care, and surgery is an option when needed.' },
  { slug: 'ingrown-toenail', title: 'Ingrown Toenail', group: 'Skin & Nails', summary: 'A nail growing into the skin can be painful and infected. We treat it quickly and with care, often in one visit.' },
  { slug: 'toenail-fungus', title: 'Toenail Fungus', group: 'Skin & Nails', summary: 'Thick, yellow or crumbly nails are a common problem. We confirm the cause and offer treatment that works.' },
  { slug: 'athletes-foot', title: "Athlete's Foot", group: 'Skin & Nails', summary: 'Itching, peeling and redness between the toes can keep coming back. We treat it and show you how to prevent it.' },
  { slug: 'plantar-warts', title: 'Plantar Warts', group: 'Skin & Nails', summary: 'Warts on the bottom of the foot can be painful when you walk. We offer modern treatment, including Swift therapy.' },
  { slug: 'custom-orthotics', title: 'Custom Orthotics', group: 'Specialty Care', summary: 'Shoe inserts made for your feet to support the arch, ease pain and improve how you walk.' },
  { slug: 'mls-laser-therapy', title: 'MLS Laser Therapy', group: 'Specialty Care', summary: 'A gentle, in-office laser treatment that helps calm pain and inflammation without drugs or downtime.' },
  { slug: 'diabetic-foot-care', title: 'Diabetic Foot Care', group: 'Specialty Care', summary: 'Regular foot checks and early care help prevent serious problems. We protect your skin, nerves and circulation.' },
  { slug: 'wound-care', title: 'Wound Care', group: 'Specialty Care', summary: 'Slow-healing sores need expert attention. We clean, protect and treat wounds to help them heal and stay healed.' },
  { slug: 'neuropathy', title: 'Neuropathy', group: 'Specialty Care', summary: 'Burning, tingling or numb feet can be a sign of nerve damage. We look for the cause and help manage symptoms.' },
  { slug: 'nerve-pain', title: 'Nerve Pain', group: 'Specialty Care', summary: 'Shooting or electric pain in the foot has many causes. We find the source and build a plan to ease it.' },
  { slug: 'pediatric-foot-care', title: 'Pediatric Foot Care', group: 'Specialty Care', summary: 'Gentle care for growing feet, from flat feet to toe walking and heel pain in active kids.' },
];

// Six featured cards for the home page flip boxes
export const featured = [
  { slug: 'heel-pain', title: 'Heel Pain & Plantar Fasciitis', img: '/images/svc-heel-pain.jpg', short: 'Take the first step without the sting.', back: 'Stretching, supports, laser therapy and targeted care for lasting relief.' },
  { slug: 'bunions', title: 'Bunions', img: '/images/svc-bunions.jpg', short: 'Comfort for your forefoot.', back: 'Simple care first. Minimally invasive outpatient surgery when it is the right choice.' },
  { slug: 'sports-injuries', title: 'Sports & Ankle Injuries', img: '/images/svc-ankle.jpg', short: 'Heal well. Return stronger.', back: 'Sprains, strains and tendon problems treated with a clear plan to get you moving.' },
  { slug: 'diabetic-foot-care', title: 'Diabetic Foot Care', img: '/images/svc-diabetic.jpg', short: 'Protect every step.', back: 'Regular checks, wound care and nerve care to keep problems small.' },
  { slug: 'custom-orthotics', title: 'Custom Orthotics', img: '/images/svc-orthotics.jpg', short: 'Support made for your feet.', back: 'Inserts built from your own foot shape to ease pain and improve balance.' },
  { slug: 'mls-laser-therapy', title: 'MLS Laser Therapy', img: '/images/svc-laser.jpg', short: 'Gentle light. Real relief.', back: 'A drug-free, in-office treatment that calms pain and inflammation.' },
];
