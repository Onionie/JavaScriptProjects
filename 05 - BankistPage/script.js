'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window
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

btnScrollTo.addEventListener('click', e => {
  // const s1coords = section1.getBoundingClientRect();

  // Old Way
  // window.scrollTo({
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // New Way
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

//////////////////////////////////////////
// Page Navigation

// document.querySelectorAll('.nav__link').forEach(btn => {
//   btn.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');

//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// EVENT DELEGATION
// 1. Add event listener to common parent element
// 2. Determine what element originated event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

/*****************************************
 *                                       *
 *                  NOTES                *
 *                                       *
 *****************************************/
/*
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

// STYLES
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

// ATTRIBUTES (src, alt, class, id, ...)
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

logo.alt = 'Beautiful new changed alt';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist'); // Set new attrbitue company='Bankist'

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// CLASSES
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Don't use - Removes everything else
// logo.className = 'jonas';

*/

// const h1 = document.querySelector('h1');

// // Modern and better way
// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: mouseenter');
// });

// // Old and bad way
// h1.onmouseenter = function (e) {
//   alert('addEventListener: mouseenter2');
// };

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => {
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}), ${randomInt(0, 255)})`;
// };

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log('Link', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();

//   // Stop Event propagation and bubbling
//   // e.stopPropagation(); //Not a good idea
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('Links', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('Nav', e.target, e.currentTarget);
// });
