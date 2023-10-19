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
