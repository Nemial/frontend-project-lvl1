import { engine, getRandomNum } from '../engine.js';
import * as cli from '../cli.js';

const description = 'What is the result of the expression?';
const operationSings = ['+', '-', '*'];
const getExpressionResult = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
};

const getAnswerAndQuestion = () => {
  const firstNumber = getRandomNum();
  const secondNumber = getRandomNum(4);
  const operation = operationSings[Math.floor(Math.random() * operationSings.length)];
  const question = `Question: ${firstNumber} ${operation} ${secondNumber}`;
  const rightAnswer = String(getExpressionResult(firstNumber, secondNumber, operation));
  return [rightAnswer, question];
};

export default () => {
  cli.welcome();
  const playerName = cli.greeting();
  engine(playerName, description, getAnswerAndQuestion);
};
