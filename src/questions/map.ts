import { num_arr } from '../global-var';

export const basic_map = () => {
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
