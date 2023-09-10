'use strict';

// document.querySelector('.message').textContent = '🎉 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// const guessInput = document.querySelector('.guess').value;

// Random Number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
// Handling Click Events
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if ((guess = secretNumber)) {
    document.querySelector('.message').textContent = 'Correct Number';
  }
});
