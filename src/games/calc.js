import executeGame from '../engine.js';
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
  const secondNumber = getRandomNumber(1, 700);
  const operation = operationSings[getRandomNumber(0, operationSings.length)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const rightAnswer = String(calculateMathematicalOperation(firstNumber, secondNumber, operation));
  return [rightAnswer, question];
};

export default () => {
  executeGame(description, getAnswerAndQuestion);
};
