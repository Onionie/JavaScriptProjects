'use strict';

// Random Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const updateScore = (string) => {
  score--;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = string;
};

const gameLost = () => {
  document.querySelector('.message').textContent = 'You Lost the Game';
  document.querySelector('.score').textContent = 0;
};

// Handling Click Events
document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);

  // No Guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }

  // Guess Correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // Guess Wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.guess').value > secretNumber
        ? updateScore('Too High!')
        : updateScore('Too Low!');
    } else {
      gameLost();
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
