////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// LECTURES FOR SECTION 12

console.log('--- LECTURE ---');
console.log('--- CONVERTING & CHECKING NUMBERS ---');

console.log(23 = 23.0); // true

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
console.log(25 ** (1/2)); // 5;
console.log(8 ** (1/3)); // 2; cubic root

console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, 23, 11, 2)); // NaN

console.log(Math.trunc(Math.random() * 6 +1)); // random numbers from 1-6

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

const isEven = n => n%2 ===0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true