import enableGame from '../engine.js';
import getRandomNumber from '../math.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getAnswerAndQuestion = () => {
  const question = getRandomNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [rightAnswer, question];
};

export default () => {
  enableGame(description, getAnswerAndQuestion);
};
