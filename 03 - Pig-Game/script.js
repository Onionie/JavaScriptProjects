'use strict';

// Selecting Elements
const score1Element = document.querySelector('#score--0');
const score2Element = document.querySelector('#score--1');
const diceElement = document.getElementsByClassName('dice');

// Starting Conditions
score1Element.textContent = 0;
score2Element.textContent = 0;
diceElement.classList.add('hidden');
