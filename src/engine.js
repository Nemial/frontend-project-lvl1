import { question as questionLine } from 'readline-sync';

export default (description, getAnswerAndQuestion) => {
  const playerName = questionLine('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [rightAnswer, question] = getAnswerAndQuestion();
    console.log(`Question: ${question}`);
    const answer = questionLine('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};
