import * as readLine from 'readline';

const getGuides = () => {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Choose questions number: ', (ans) => {
    if (!Number(ans)) {
      console.log('Insert a number');
      throw new Error('not a number');
    }

    console.log(guides(ans));
    rl.close();
  });
};

const guides = (num: string) => {
  const g: any = {
    '1': `1. First find max using map \n2. Then map the compare array using the result from the max value`,
    default: `No guide for that sorry bro`,
  };

  return g[num] || g['default'];
};

getGuides();
