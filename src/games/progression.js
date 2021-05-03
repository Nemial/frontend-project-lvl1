import { engine, getRandomNum } from '../engine.js';
import * as cli from '../cli.js';

const description = 'What number is missing in the progression?';
const generateProgression = (startNum, step, progressionLength = 10) => {
  const progression = [];

  for (let i = 0; i <= progressionLength; i += 1) {
    progression[i] = startNum + i * step;
  }

  return progression;
};

const generateStep = () => {
  const multiplier = 10;
  return Math.floor(Math.random() * multiplier);
};

const getAnswerAndQuestion = () => {
  const firstNum = getRandomNum();
  const step = generateStep();
  const progression = generateProgression(firstNum, step);
  const hiddenItemIndex = Math.floor(Math.random() * progression.length);
  const rightAnswer = String(progression[hiddenItemIndex]);
  progression[hiddenItemIndex] = '...';
  const question = progression.join(' ');
  return [rightAnswer, question];
};

export default () => {
  cli.welcome();
  const playerName = cli.greeting();
  engine(playerName, description, getAnswerAndQuestion);
};
