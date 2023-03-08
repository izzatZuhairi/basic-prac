import * as readLine from 'readline';

const getGuides = () => {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Insert question/function name (eg: map_q1): ', (ans) => {
    console.log(guides(ans));
    rl.close();
  });
};

const guides = (num: string) => {
  const g: any = {
    map_q1: `
    1. First find max using map (store the value somewhere)
    2. Then map the compare array using the result from the max value`,
    default: `No guide for that sorry bro`,
  };

  return g[num] || g['default'];
};

getGuides();
