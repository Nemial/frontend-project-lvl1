import executeGame from '../engine.js';
import getRandomNumber from '../math.js';

const description = 'Find the greatest common divisor of given numbers.';
const findGCD = (firstNumber, secondNumber) => {
  const result = firstNumber % secondNumber;
  const minNumber = secondNumber === 0 ? firstNumber : secondNumber;
  return result ? findGCD(secondNumber, firstNumber % secondNumber) : minNumber;
};

const getAnswerAndQuestion = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber(1, 900);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(findGCD(firstNumber, secondNumber));
  return [rightAnswer, question];
};

export default () => {
  executeGame(description, getAnswerAndQuestion);
};
