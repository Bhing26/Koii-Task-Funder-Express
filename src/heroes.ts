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
 * Normalize a string for consistent comparison
 * @param str - Input string to normalize
 * @returns Normalized string
 */
function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s]/g, '')  // Remove special characters
    .replace(/\s+/g, '')      // Remove all whitespace
    .replace('-', '');        // Remove hyphens
}

/**
 * Creates a case-insensitive map of hero names to their full details
 * @returns Map of normalized hero names to hero objects
 */
export function createHeroNameMap(): Map<string, Hero> {
  const heroMap = new Map<string, Hero>();
  
  heroesData.forEach(hero => {
    // Add normalized name mappings
    const nameVariants = [
      normalizeString(hero.name),
      normalizeString(hero.alterEgo),
      hero.name.toLowerCase(),
      hero.alterEgo.toLowerCase()
    ];

    nameVariants.forEach(variant => {
      heroMap.set(variant, hero);
    });
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
  
  // Try multiple search strategies
  const searchVariants = [
    normalizeString(name),
    name.toLowerCase()
  ];

  for (const variant of searchVariants) {
    const hero = heroMap.get(variant);
    if (hero) return hero;
  }

  return undefined;
}