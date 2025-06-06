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
 * Generate all possible name variations
 * @param hero - Hero object
 * @returns Array of name variations
 */
function generateNameVariations(hero: Hero): string[] {
  return [
    // Original variants
    hero.name,
    hero.alterEgo,
    hero.name.toLowerCase(),
    hero.alterEgo.toLowerCase(),
    
    // Normalized variants
    hero.name.replace('-', '').toLowerCase(),
    hero.name.replace('-', ' ').toLowerCase(),
    hero.alterEgo.replace(/\s+/g, '').toLowerCase(),
    
    // No hyphen/space variants
    hero.name.replace('-', ''),
    hero.name.replace('-', ' '),
    
    // All lowercase, no special chars
    hero.name.toLowerCase().replace(/[^\w]/g, ''),
    hero.alterEgo.toLowerCase().replace(/[^\w]/g, '')
  ];
}

/**
 * Creates a case-insensitive map of hero names to their full details
 * @returns Map of hero name variations to hero objects
 */
export function createHeroNameMap(): Map<string, Hero> {
  const heroMap = new Map<string, Hero>();
  
  heroesData.forEach(hero => {
    const variations = generateNameVariations(hero);
    variations.forEach(variant => {
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
  
  // Prepare search variations
  const searchVariants = [
    name,
    name.toLowerCase(),
    name.replace('-', '').toLowerCase(),
    name.replace('-', ' ').toLowerCase(),
    name.toLowerCase().replace(/[^\w]/g, ''),
    name.replace(/\s+/g, '').toLowerCase()
  ];

  for (const variant of searchVariants) {
    const hero = heroMap.get(variant);
    if (hero) return hero;
  }

  return undefined;
}