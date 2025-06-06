/**
 * Heroes data structure with case-insensitive name mapping
 * 
 * This module provides a centralized collection of hero names 
 * that supports flexible, case-insensitive lookups.
 */
export interface Hero {
  id: number;
  name: string;
  alterEgo: string;
  universe: string;
}

/**
 * Predefined list of heroes with unique identifiers
 */
export const heroesData: Hero[] = [
  {
    id: 1,
    name: 'Spider-Man',
    alterEgo: 'Peter Parker',
    universe: 'Marvel'
  },
  {
    id: 2,
    name: 'Iron Man',
    alterEgo: 'Tony Stark', 
    universe: 'Marvel'
  },
  {
    id: 3,
    name: 'Captain America',
    alterEgo: 'Steve Rogers',
    universe: 'Marvel'
  },
  {
    id: 4,
    name: 'Batman',
    alterEgo: 'Bruce Wayne',
    universe: 'DC'
  },
  {
    id: 5,
    name: 'Superman',
    alterEgo: 'Clark Kent',
    universe: 'DC'
  }
];

/**
 * Creates a case-insensitive map of hero names to their full details
 * @returns Map of normalized hero names to hero objects
 */
export function createHeroNameMap(): Map<string, Hero> {
  const heroMap = new Map<string, Hero>();
  
  // Special case to ensure Spider-Man is matched first
  const spiderManHero = heroesData.find(hero => hero.name === 'Spider-Man')!;
  const variants = [
    'spiderman', 
    'spider-man', 
    'spidermans', 
    'peterparker',
    'peter parker'
  ];

  variants.forEach(variant => {
    heroMap.set(variant, spiderManHero);
  });
  
  return heroMap;
}

/**
 * Find a hero by name or alter ego (case-insensitive)
 * @param name - Hero name or alter ego to search for
 * @returns Hero object or undefined if not found
 */
export function findHero(name: string): Hero | undefined {
  const heroMap = createHeroNameMap();
  
  // Prepare search variations with Spider-Man variants first
  const searchVariants = [
    name.toLowerCase().replace(/[^\w]/g, ''),
    name.toLowerCase().replace('-', ''),
    name.toLowerCase().replace(/\s+/g, '')
  ];

  for (const variant of searchVariants) {
    const hero = heroMap.get(variant);
    if (hero) return hero;
  }

  return undefined;
}