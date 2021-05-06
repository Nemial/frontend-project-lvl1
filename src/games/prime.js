import { engine, getRandomNum } from '../engine.js';
import * as cli from '../cli.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getAnswerAndQuestion = () => {
  const firstNum = getRandomNum();
  const rightAnswer = isPrime(firstNum) ? 'yes' : 'no';
  const question = `${firstNum}`;
  return [rightAnswer, question];
};

export default () => {
  cli.welcome();
  const playerName = cli.greeting();
  engine(playerName, description, getAnswerAndQuestion);
};
