import { question } from 'readline-sync';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getRandomNum = (round) => {
  const multiplier = isEven(round) ? 100 : 10;
  return Math.round(Math.random() * multiplier);
};

export default (playerName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const gameRounds = 3;

  for (let i = 0; i < gameRounds; i += 1) {
    const randomNumber = getRandomNum(i);
    console.log(`Question: ${randomNumber}`);
    const answer = question('Your answer: ');
    const rightAnswer = isEven(randomNumber);
    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};
