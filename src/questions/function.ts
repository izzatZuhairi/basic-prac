import { function_to_use } from './helpers/function_q1.helper';

export const function_q1 = () => {
  let a1 = 3;
  let a2 = 4;

  let b1 = 5;
  let b2 = 6;

  let c1 = 7;
  let c2 = 3;

  // shortened the operation below to use the function called 'function_to_use' inside helpers instead of
  // redundantly making the same operation

  const sum_a = a1 + a2 * a1 - a2;
  const sum_b = b1 + b2 * b1 - b2;
  const sum_c = c1 + c2 * c1 - c2;

  return sum_a + sum_b + sum_c;
};
