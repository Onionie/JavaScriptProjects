const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// LECTURES FOR SECTION 12

console.log('--- LECTURE ---');
console.log('--- CONVERTING & CHECKING NUMBERS ---');

console.log(23 == 23.0); // true

// Conversion
console.log(Number('23')); // 23 type === number
console.log(+'23'); // Will convert type === number

// Parsing
console.log(Number.parseInt('30px')); //30
console.log(Number.parseInt('2.5px')); //2
console.log(Number.parseFloat('2.5px')); //2.5

console.log(Number.isNaN(20)); // false, is a number, checks for is not a number - NaN
console.log(Number.isNaN('20')); // false, is a number, checks for is not a number - NaN
console.log(Number.isNaN(+'20X')); // true, checks for is not a number - NaN

console.log('');
console.log('--- MATH & ROUNDING ---');

console.log(Math.sqrt(25)); // 5;
console.log(25 ** (1 / 2)); // 5;
console.log(8 ** (1 / 3)); // 2; cubic root

console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, 23, 11, 2)); // NaN

console.log(Math.trunc(Math.random() * 6 + 1)); // random numbers from 1-6

// Rounding Integers
console.log(Math.trunc(23.3)); //23; removes all decimals

console.log(Math.round(23.3)); //23;
console.log(Math.round(23.9)); //24;

console.log(Math.ceil(23.3)); //24; always rounds up
console.log(Math.ceil(23.9)); //24; always rounds up

console.log(Math.floor(23.3)); //23; always rounds down
console.log(Math.floor(23.9)); //23; always rounds down

console.log(Math.trunc(-23.3)); //23; removes all decimals
console.log(Math.floor(-23.3)); //24; always rounds down

console.log('');
console.log('--- REMAINDER OPERATOR ---');

console.log(5 % 2); // 1; remainder
console.log(5 / 2); // 2.5;

console.log(8 % 3); // 2;
console.log(8 / 3); // 2.6666;

// Even or Odd
// even if remainder is 0
console.log(6 % 2); // 0; even
console.log(7 % 2); // 0; odd

const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true

console.log('');
console.log('--- NUMERIC SEPARATORS ---');

// 287,460,000,000
// JS can use underscore as comma or period as separators
const diamater = 287_460_000_000;
console.log(diamater);

const priceCents = 345_99;

console.log(Number('230_000')); // NaN

console.log('');
console.log('--- WORKING WITH BIGINT ---');

// using n at the end of huge number signifies bigint
console.log(483841321548646486465464n);
console.log(BigInt(483841321548646486465464));

// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n)); error

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20); // false
console.log(typeof 20n); //bigint
console.log(20n == '20'); // true

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(11n / 3n); // 3n cuts off remainder
console.log(10 / 3); // 3.3333335

console.log('');
console.log('--- CREATING DATES ---');

const now = new Date();
console.log(now);

console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

// Operation with dates
console.log('');
console.log('--- OPERATION WITH DATES ---');

const future1 = new Date(2037, 10, 19, 15, 23);
console.log(+future); //Transform to integer

const calcDaysPassed = (date1, date2) => {
  Math.abs(date2 - date1 / (1000 * 60 * 60 * 24));
};

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1); // return days

console.log('');
console.log('--- TIMERS setTimeout and setInterval ---');

const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza wiht ${ing1} and ${ing2}'`),
  3000,
  ...ingredients
);

// To delete timer
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval - every specified time, gets executed again
// setInterval(() => {
//   const now1 = new Date();
//   const currHour = now1.getHours();
//   const currMinutes = now1.getMinutes();
//   const currSecs = now1.getSeconds();
//   console.log(`Time now is ${currHour}:${currMinutes}:${currSecs}`);
// }, 1000);
