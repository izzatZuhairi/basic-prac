import { num_arr, str_arr } from '../global-var';

export const map_q1 = () => {
  const to_compare_arr = [1, 2, 5, 5, 3, 3, 8, 9, 9];

  let count_num_less_than_max_num_arr = 0;

  //// logic goes here...
  // this logic to be removed and put in answer
  let max: number = 0;

  num_arr.map((num) => {
    if (num > max) max = num;
  });

  to_compare_arr.map((num) => {
    if (num < max) count_num_less_than_max_num_arr++;
  });
  //

  return count_num_less_than_max_num_arr;
};

export const map_q2 = () => {
  let string_contains_bird: string[] = [];

  str_arr.map((v) => {
    if (v.includes('bird')) string_contains_bird.push(v);
  });

  return string_contains_bird;
};
