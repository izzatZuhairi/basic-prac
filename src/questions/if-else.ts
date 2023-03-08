export const if_q1 = () => {
  const arr: any = [...Array(40).keys()];

  console.log(arr, '??');

  const prime1 = 2;
  const prime2 = 3;

  let result: any = [];

  result = arr.map((v: any) => {
    if (v % prime1 === 0 && v % prime2 === 0) {
      return 'I love ifca, jk';
    } else if (v % prime1 === 0) {
      return 'Ifca hmm..';
    } else if (v % prime2 === 0) {
      return 'If who?';
    } else return v;
  });

  return result;
};
