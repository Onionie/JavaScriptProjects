'use strict';

// Created variables to select our DOM in html
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// A function that closes our modals by adding CSS class to it
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// A function that shows our modals by removing CSS class to it
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//When modals are clicked show Modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', showModal);
}

//Close modals when clicked
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Close modal when we hit escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
