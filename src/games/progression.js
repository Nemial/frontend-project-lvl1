import enableGame from '../engine.js';
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
  const min = 1;
  const max = 20;
  const step = getRandomNumber(min, max);
  const progression = generateProgression(firstNumber, step);
  const startIndex = 0;
  const hiddenItemIndex = getRandomNumber(startIndex, progression.length);
  const deleteItemCount = 1;
  const hiddenChar = '..';
  const [rightAnswer] = progression.splice(hiddenItemIndex, deleteItemCount, hiddenChar);
  const question = progression.join(' ');
  return [String(rightAnswer), question];
};

export default () => {
  enableGame(description, getAnswerAndQuestion);
};
