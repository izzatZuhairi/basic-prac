import * as readLine from 'readline';

const getAns = () => {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Choose questions number: ', (ans) => {
    if (!Number(ans)) {
      console.log('Insert a number');
      throw new Error('not a number');
    }

    console.log(
      'REMINDER: This is a possible, any solution is accepted as long as it works :) \n'
    );

    console.log(answers(ans));
    rl.close();
  });
};

const answers = (w: string) => {
  const g: any = {
    '1': `
    let max: number = 0; 

    num_arr.map((num) => {
      if (num > max) max = num;
    });
  
    to_compare_arr.map((num) => {
      if (num < max) count_num_less_than_max_num_arr++;
    });
    `,
    default: `Buat sendiri bro hahah`,
  };

  return g[w] || g['default'];
};

getAns();
