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
