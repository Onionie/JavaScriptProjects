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

// CHALLENGE 1
/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult (`Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

const checkDogs = function (arr1, arr2) {
  const juliaDogs = arr1.slice();
  juliaDogs.splice(0, 1);
  juliaDogs.splice(-2);
  console.log(juliaDogs);
  console.log(arr2);

  const allDogsAges = juliaDogs.concat(arr2);
  console.log(allDogsAges);

  allDogsAges.forEach(function (dog, i) {
    console.log(
      dog <= 3
        ? `Dog number ${i + 1} is still a puppy.`
        : `Dog number ${i + 1} is an adult, and is ${dog} years old`
    );
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
