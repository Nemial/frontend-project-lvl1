import enableGame from '../engine.js';
import getRandomNumber from '../math.js';

const description = 'What is the result of the expression?';
const operationSings = ['+', '-', '*'];
const calculateMathematicalOperation = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('Unknown operation');
  }
};

const getAnswerAndQuestion = () => {
  const firstNumber = getRandomNumber();
  const min = 1;
  const max = 700;
  const secondNumber = getRandomNumber(min, max);
  const startIndex = 0;
  const operation = operationSings[getRandomNumber(startIndex, operationSings.length)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const rightAnswer = String(calculateMathematicalOperation(firstNumber, secondNumber, operation));
  return [rightAnswer, question];
};

export default () => {
  enableGame(description, getAnswerAndQuestion);
};
