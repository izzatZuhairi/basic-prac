import { function_q1 } from '../src/questions/function';
import * as fx from '../src/questions/helpers/function_q1.helper';

describe('FUNCTION', () => {
  test('The function [function_to_use] should be called 3 times', () => {
    jest.spyOn(fx, 'function_to_use');

    function_q1();

    expect(fx.function_to_use).toHaveBeenCalledTimes(3);
  });
});
