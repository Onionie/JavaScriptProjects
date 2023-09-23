'use strict';

// Selecting Elements
const score1Element = document.querySelector('#score--0');
const score2Element = document.querySelector('#score--1');
const current1Element = document.getElementById('current--0');
const current2Element = document.getElementById('current--1');
const player1Element = document.querySelector('.player--0');
const player2Element = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
let playing, scores, currentScore, activePlayer;

// Initialize Game
const initializeGame = () => {
  diceElement.classList.add('hidden');
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  player1Element.classList.remove('player--winner');
  player2Element.classList.remove('player--winner');
  score1Element.textContent = 0;
  score2Element.textContent = 0;
  current1Element.textContent = 0;
  current2Element.textContent = 0;
  player1Element.classList.add('player--active');
  player2Element.classList.remove('player--active');
};

// switch player

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player1Element.classList.toggle('player--active');
  player2Element.classList.toggle('player--active');
};

// Roll dice functionality
const rollDice = () => {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    diceElement.classList.remove('hidden');
    diceElement.src = `./images/dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

initializeGame();

btnRollDice.addEventListener('click', rollDice);

btnHold.addEventListener('click', () => {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 5) {
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    diceElement.classList.add('hidden');
  } else {
    switchPlayer();
  }
});

btnNewGame.addEventListener('click', () => {
  initializeGame();
});
