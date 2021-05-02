import { question } from 'readline-sync';

export const greeting = () => {
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};
