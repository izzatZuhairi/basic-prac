import { map_q1, map_q2 } from '../src/questions/map';

describe('MAP', () => {
  test('Should return 6', () => {
    expect(map_q1()).toBe(6);
  });

  test('Should return [bird, bird_sparrow, bird_peacock]', () => {
    expect(map_q2()).toEqual(['bird', 'bird_sparrow', 'bird_peacock']);
  });
});
