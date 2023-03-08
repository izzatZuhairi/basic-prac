import * as readLine from 'readline';

const getAns = () => {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Insert function name/question name (eg: map_q1): ', (ans) => {
    console.log(
      'REMINDER: This is a possible solution, any solution is accepted as long as it works :) \n'
    );

    console.log(answers(ans));
    rl.close();
  });
};

const answers = (w: string) => {
  const g: any = {
    map_q1: `
    let max: number = 0; 

    num_arr.map((num) => {
      if (num > max) max = num;
    });
  
    to_compare_arr.map((num) => {
      if (num < max) count_num_less_than_max_num_arr++;
    });
    `,
    map_q2: `
    str_arr.map((v) => {
        if (v.includes('bird')) string_contains_bird.push(v);
    });
    `,
    filter_q1: `
    result = object_array.filter((v) => v.id === 1);
    `,
    if_q1: `
    if (v % prime1 === 0 && v % prime2 === 0) {
        return 'I love ifca, jk';
    } else if (v % prime1 === 0) {
        return 'Ifca hmm..';
    } else if (v % prime2 === 0) {
        return 'If who?';
    } else return v;
    `,
    default: `Buat sendiri bro hahah`,
  };

  return g[w] || g['default'];
};

getAns();
