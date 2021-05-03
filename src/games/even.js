import { engine, getRandomNum } from '../engine.js';
import * as cli from '../cli.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getAnswerAndQuestion = () => {
  const question = getRandomNum();
  const rightAnswer = isEven(question);
  return [rightAnswer, question];
};

export default () => {
  cli.welcome();
  const playerName = cli.greeting();
  engine(playerName, description, getAnswerAndQuestion);
};
