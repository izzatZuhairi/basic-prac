export const if_q1 = () => {
  const arr: any = [...Array(40).keys()];

  const prime1 = 2;
  const prime2 = 3;

  let result: any = [];

  // return I love ifca, jk if divisible by both prime number
  // return Ifca hmm.. if divisible by only prime1
  // return If who? if divisible by only prime2

  result = arr.map((v: any) => {
    if (/** logic goes here */ true) {
      return 'I love ifca, jk';
    } else if (/** logic goes here */ true) {
      return 'Ifca hmm..';
    } else if (/** logic goes here */ true) {
      return 'If who?';
    } else return v;
  });

  return result;
};
