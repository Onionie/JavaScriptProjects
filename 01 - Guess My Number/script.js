'use strict';

// Random Number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);

const updateScore = (string) => {
  score--;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = string;
};

// Handling Click Events
document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      updateScore('Too High!');
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      updateScore('Too Low!');
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
