'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*****************************************
 *                                       *
 *                  NOTES                *
 *                                       *
 *****************************************/
const header = document.querySelector('.header');

// CREATING AND INSERTING ELEMENTS
// .insertAdjacentHTML

// .createElement
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality.';
message.innerHTML =
  'We use cookies for improved analytics. <button class ="btn btn--close-cookie"> Got It! </button>';

header.prepend(message); // First-child
// header.append(message); // Last-child

// Need to clone an element
// header.append(message.cloneNode(true));

// as a sibling - before/after
// header.before(message);
// header.after(message);

// DELETE ELEMENTS
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });
