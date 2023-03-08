import { array_q1, array_q2 } from '../src/questions/array';

describe('ARRAY', () => {
  test(`Should return expected result`, () => {
    expect(array_q1()).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
  });

  test(`Should return expected`, () => {
    expect(array_q2()).toEqual(['milk', 'flour', 'butter', 'chocolate']);
  });
});
