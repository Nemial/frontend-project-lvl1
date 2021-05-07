import enableGame from '../engine.js';
import getRandomNumber from '../math.js';

const description = 'Find the greatest common divisor of given numbers.';
const findGCD = (firstNumber, secondNumber) => {
  const result = firstNumber % secondNumber;
  const minNumber = secondNumber === 0 ? firstNumber : secondNumber;
  return result ? findGCD(secondNumber, firstNumber % secondNumber) : minNumber;
};

const getAnswerAndQuestion = () => {
  const firstNumber = getRandomNumber();
  const min = 1;
  const max = 900;
  const secondNumber = getRandomNumber(min, max);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(findGCD(firstNumber, secondNumber));
  return [rightAnswer, question];
};

export default () => {
  enableGame(description, getAnswerAndQuestion);
};
