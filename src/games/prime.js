import executeGame from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

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
  const firstNumber = getRandomNumber();
  const rightAnswer = isPrime(firstNumber) ? 'yes' : 'no';
  const question = String(firstNumber);
  return [rightAnswer, question];
};

export default () => {
  executeGame(description, getAnswerAndQuestion);
};
