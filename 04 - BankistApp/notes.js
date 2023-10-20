'use strict';

/////////////////////////////////////////////////
// SIMPLE ARRAY METHODS
let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice method returns a new array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

// SPLICE method mutates the original array
// console.log(arr.splice(2)); //['c','d','e']
// arr.splice(-1); // ['b']
arr.splice(1, 2); // Starting from ['b'], remove 2 elements - 'b', 'c' removed
console.log(arr); // ['a']; lose what got extracted from splice method

// REVERSE method - reversed and mutates original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT - concats 2 arrays
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN joins array elements to a string with a given separator
console.log(letters.join('-'));

/////////////////////////////////////////////////
// NEW AT METHOD
const arrAt = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arrAt.at(0)); // 23

//getting last element
console.log(arrAt[arrAt.length - 1]); // 64
console.log(arrAt.at(-1)); // 64

console.log('jonas'.at(0)); // j

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of method
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement >= 0) {
    console.log(`Movement ${i + 1} This person made a deposit of ${movement}`);
  } else {
    console.log(
      `Movement ${i + 1} This person made a withdrawal of ${movement * -1}`
    );
  }
}

//forEach method
console.log('forEach Method');
// The callback function parameters' order matters
// first parameter is the current element,
// second is the index
// third is the entire array that we're looping over
movements.forEach(function (movement, i, arr) {
  if (movement >= 0) {
    console.log(`Movement ${i + 1} This person made a deposit of ${movement}`);
  } else {
    console.log(
      `Movement ${i + 1} This person made a withdrawal of ${movement * -1}`
    );
  }
  // console.log(arr);
});
