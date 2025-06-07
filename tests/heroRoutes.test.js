import { describe, it, expect } from 'vitest';
import express from 'express';
import request from 'supertest';
import heroRoutes from '../src/routes/heroRoutes';

describe('Hero Routes', () => {
  const app = express();
  app.use(heroRoutes);

  it('should return Spider-Man details correctly', async () => {
    const response = await request(app).get('/spiderMan');
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: 'Spider-Man',
      description: 'Peter Parker, a superhero who gained spider-like abilities after being bitten by a radioactive spider.'
    });
  });
});