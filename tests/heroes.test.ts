import { describe, it, expect } from 'vitest';
import { heroesData, findHero, createHeroNameMap } from '../src/heroes';

describe('Heroes Data Structure', () => {
  it('should have correct number of initial heroes', () => {
    expect(heroesData.length).toBe(5);
  });

  it('should create a case-insensitive hero map', () => {
    const heroMap = createHeroNameMap();
    
    // Test various case variations
    expect(heroMap.get('spider-man')).toBeDefined();
    expect(heroMap.get('SPIDER-MAN')).toBeDefined();
    expect(heroMap.get('peter parker')).toBeDefined();
    expect(heroMap.get('PETER PARKER')).toBeDefined();
  });

  it('should find hero by name (case-insensitive)', () => {
    // Test finding heroes with different casing
    const spiderMan = findHero('Spider-Man');
    const spiderManLower = findHero('spider-man');
    const spiderManUpper = findHero('SPIDER-MAN');

    expect(spiderMan).toBeDefined();
    expect(spiderManLower).toBeDefined();
    expect(spiderManUpper).toBeDefined();
    expect(spiderMan).toEqual(spiderManLower);
    expect(spiderMan).toEqual(spiderManUpper);
  });

  it('should find hero by alter ego (case-insensitive)', () => {
    const tonyStark = findHero('Tony Stark');
    const tonyStarkLower = findHero('tony stark');
    const tonyStarkUpper = findHero('TONY STARK');

    expect(tonyStark).toBeDefined();
    expect(tonyStarkLower).toBeDefined();
    expect(tonyStarkUpper).toBeDefined();
    expect(tonyStark).toEqual(tonyStarkLower);
    expect(tonyStark).toEqual(tonyStarkUpper);
  });

  it('should return undefined for non-existent hero', () => {
    const nonExistentHero = findHero('Non-Existent Hero');
    expect(nonExistentHero).toBeUndefined();
  });
});