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
 * @returns Map of lowercase hero names to hero objects
 */
export function createHeroNameMap(): Map<string, Hero> {
  const heroMap = new Map<string, Hero>();
  
  heroesData.forEach(hero => {
    // Add case-insensitive name mappings
    heroMap.set(hero.name.toLowerCase(), hero);
    heroMap.set(hero.alterEgo.toLowerCase(), hero);
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
  return heroMap.get(name.toLowerCase());
}