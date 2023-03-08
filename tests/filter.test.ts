import { filter_q1 } from '../src/questions/filter';

describe('FILTER', () => {
  test('Should return [{id:1},{id:1}]', () => {
    expect(filter_q1()).toEqual([{ id: 1 }, { id: 1 }]);
  });
});
