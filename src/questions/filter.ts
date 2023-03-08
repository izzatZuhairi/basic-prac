import { obj_arr } from '../global-var';

export const filter_q1 = () => {
  let object_array = obj_arr;

  let result: any = [];

  // filter only id = 1
  result = object_array.filter((v) => v.id === 1);

  return result;
};
