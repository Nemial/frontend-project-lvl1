import { question } from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};
