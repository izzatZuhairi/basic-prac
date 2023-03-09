import { async_q1 } from '../src/challenge-questions/async-operation';

describe('ASYNC OPERATION', () => {
  test('Should return `first second third fourth!`', async () => {
    expect(await async_q1()).toEqual('first second third fourth!');
  });
});
