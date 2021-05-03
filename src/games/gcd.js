import { engine, getRandomNum } from '../engine.js';
import * as cli from '../cli.js';

const description = 'Find the greatest common divisor of given numbers.';
const findGCD = (firstNum, secondNum) => {
  const minNum = firstNum > secondNum ? secondNum : firstNum;
  return firstNum % secondNum ? findGCD(secondNum, firstNum % secondNum) : minNum;
};

const getAnswerAndQuestion = () => {
  const firstNum = getRandomNum();
  const secondNum = getRandomNum(4);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = String(findGCD(firstNum, secondNum));
  return [rightAnswer, question];
};

export default () => {
  cli.welcome();
  const playerName = cli.greeting();
  engine(playerName, description, getAnswerAndQuestion);
};
