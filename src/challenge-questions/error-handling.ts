// assume the obj to have the following structure

//   name: string;
//   age: number;
//   school?: {
//     primary?: string;
//     secondary?: string;
//   };

export const error_q1 = (obj: any) => {
  let primarySch;
  let secondarySch;
  let name;

  primarySch = obj.school.primary;
  secondarySch = obj.school.secondary;
  name = obj.name;

  // based on the parameter passed to this function, it will cause error.
  // handle the possible error caused by these operation
  // return obj as a whole when there is error

  return {
    primarySch,
    secondarySch,
    name,
  };
};
