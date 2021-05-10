import executeGame from '../engine.js';
import getRandomNumber from '../math.js';

const description = 'What number is missing in the progression?';
const generateProgression = (startNumber, step, progressionLength = 10) => {
  const progression = [];

  for (let i = 0; i <= progressionLength; i += 1) {
    progression[i] = startNumber + i * step;
  }

  return progression;
};

const getAnswerAndQuestion = () => {
  const firstNumber = getRandomNumber();
  const step = getRandomNumber(1, 20);
  const progression = generateProgression(firstNumber, step);
  const hiddenItemIndex = getRandomNumber(0, progression.length);
  const [rightAnswer] = progression.splice(hiddenItemIndex, 1, '..');
  const question = progression.join(' ');
  return [String(rightAnswer), question];
};

export default () => {
  executeGame(description, getAnswerAndQuestion);
};
