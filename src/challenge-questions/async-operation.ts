// word1 only return after 2 seconds
const word1 = async () => {
  return new Promise((res) =>
    setTimeout(() => {
      res('first');
    }, 2000)
  );
};

const word2 = () => {
  return 'second';
};

// word3 only return after 2 seconds
const word3 = async () => {
  return new Promise((res) =>
    setTimeout(() => {
      res('third');
    }, 2000)
  );
};

const word4 = () => {
  return 'fourth!';
};

// convert the following function to asynchronous function
// and handles the delayed result so it will return the correct words
export const async_q1 = () => {
  return word1() + ' ' + word2() + ' ' + word3() + ' ' + word4();
};
