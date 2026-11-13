export const localCity = 'City, ST'; // TODO
export const localAreas: string[] = []; // nearby cities, client reviews list

export function localFor(topic: string, kind: 'service' | 'condition' | 'group') {
  return {
    city: localCity,
    eyebrow: `${topic} in ${localCity}`,
    banner: `${topic} care in ${localCity}`,
    areas: localAreas,
    sectionTitle: `${topic} treatment in ${localCity}`,
    text: [] as string[],
    kind,
  };
}
