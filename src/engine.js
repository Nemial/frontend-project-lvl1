import * as readlineSync from 'readline-sync';

export const getRandomNum = (baseMultiplier = 5) => {
  const baseNum = Math.round(Math.random() * baseMultiplier);
  const multiplier = Math.floor((Math.random() * baseNum) * (baseMultiplier ** 2));
  return Math.round((Math.random() * multiplier) * baseNum);
};

export const engine = (playerName, description, getAnswerAndQuestion) => {
  console.log(description);
  const gameRounds = 3;

  for (let i = 0; i < gameRounds; i += 1) {
    const [rightAnswer, question] = getAnswerAndQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};
