import { object_q1 } from '../src/questions/object';

describe('OBJECT', () => {
  test('Should return expected result', () => {
    expect(object_q1()).toEqual({
      name: 'Joanne Schmidt',
      school: 'Harvard University',
      work: 'Software Developer',
      interest: ['AI', 'Machine Learning', 'BlockChain'],
      favouriteArtist: 'Billie Ellish',
    });
  });
});
