'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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

// Tabbed Component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  // if condition is met, return immediately
  // and do not proceed to remaining lines
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Reveal sections on scroll
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  // Entry depends on how many thresholds
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

// Trigger revealSection function once it meets the threshold
const sectObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

// Attach an observer to each section
allSections.forEach(function (section) {
  sectObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy loading
const imgTargets = document.querySelectorAll('img[data-src]');

const loadFull = function (entries, observer) {
  // Entry depends on how many thresholds
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadFull, {
  root: null,
  threshold: 0,
  rootMargin: '300px',
});

imgTargets.forEach(function (img) {
  imgObserver.observe(img);
});

// Slider Components
// One big function to avoid polluting the global scopes
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      // Create Dots for each slide
      // beforeend = lastChild
      // data-slide="${i}"; current slide
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (currSlide) {
    // Remove all active dot classes
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    // Activate selected dot
    document
      .querySelector(`.dots__dot[data-slide="${currSlide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  // Event delegation - only select child/dots buttons
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // get slide number of the dot
      const { slide } = e.target.dataset;

      // goToSlide number
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//
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

/*
****** DOM TRAVERSING ******

const h1 = document.querySelector('h1');

// Going downwards: child elements
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); // Everything, text, comment, elements
console.log(h1.children); // Only elements
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'pink';

// Going upwards: parent elements
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('h1').style.background = 'var(--gradient-primary)'; //h1 itself

// Going sideways: sibling elements
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (element) {
  if (element !== h1) element.style.transform = 'scale(0.5)';
});

*/

// ****** Lifecycle DOM Events ******
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
