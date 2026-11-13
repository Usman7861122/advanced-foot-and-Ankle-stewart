export type Condition = {
  slug: string;
  title: string;
  group: 'Heel & Arch' | 'Toes & Forefoot' | 'Ankle & Tendons' | 'Nerves, Skin & Joints';
  summary: string;
};

export const conditions: Condition[] = [
  { slug: 'plantar-fasciitis', title: 'Plantar Fasciitis', group: 'Heel & Arch', summary: 'Irritation of the thick band under the foot. It causes heel and arch pain, often worst with the first steps in the morning.' },
  { slug: 'heel-spurs', title: 'Heel Spurs', group: 'Heel & Arch', summary: 'A small bony growth under the heel. It often goes with plantar fasciitis and can usually be treated without surgery.' },
  { slug: 'flat-feet', title: 'Flat Feet', group: 'Heel & Arch', summary: 'When the arch is low or missing, feet and legs can tire and hurt. Supports and exercises often help, in adults and children.' },
  { slug: 'bunions', title: 'Bunions', group: 'Toes & Forefoot', summary: 'A bony bump at the base of the big toe that grows slowly over time. Early care can ease pain and slow the change.' },
  { slug: 'ingrown-toenails', title: 'Ingrown Toenails', group: 'Toes & Forefoot', summary: 'The edge of a nail grows into the skin, causing pain, redness and sometimes infection.' },
  { slug: 'ankle-sprains', title: 'Ankle Sprains', group: 'Ankle & Tendons', summary: 'Stretched or torn ligaments from a twist or roll. Good early care helps prevent a weak, unstable ankle later.' },
  { slug: 'tendonitis-and-tears', title: 'Tendonitis & Tissue Tears', group: 'Ankle & Tendons', summary: 'Overuse or sudden injury can inflame or tear tendons and soft tissue around the foot and ankle.' },
  { slug: 'gout', title: 'Gout', group: 'Nerves, Skin & Joints', summary: 'A form of arthritis that causes sudden, severe joint pain, most often in the big toe.' },
  { slug: 'arthritis', title: 'Arthritis', group: 'Nerves, Skin & Joints', summary: 'Joint wear and inflammation that cause stiffness and pain in the foot and ankle.' },
  { slug: 'diabetic-neuropathy', title: 'Diabetic Neuropathy', group: 'Nerves, Skin & Joints', summary: 'Nerve damage linked to diabetes. It can cause numbness, tingling or burning, and makes foot checks very important.' },
  { slug: 'foot-ulcers', title: 'Slow-Healing Foot Ulcers', group: 'Nerves, Skin & Joints', summary: 'Open sores that heal slowly need prompt, expert care to prevent infection.' },
  { slug: 'toenail-fungus', title: 'Toenail Fungus', group: 'Nerves, Skin & Joints', summary: 'A common infection that makes nails thick, yellow and brittle.' },
];
