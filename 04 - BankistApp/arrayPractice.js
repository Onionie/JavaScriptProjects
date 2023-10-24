'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Practice
// #1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(bankDepositSum);

// #2
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000).length;

// #3
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      // curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
      sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals); // 25180 -7340

// #4
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word ? word : word[0].toUpperCase() + word.slice(1))
    );

  // });

  return titleCase;
};

console.log(convertTitleCase('this is a title case'));

console.log('');
console.log('--- CHALLENGE #4 ---');
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// #1
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// #2
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahsDog);

if (
  sarahsDog.curFood > sarahsDog.recommendedFood * 0.9 &&
  sarahsDog.curFood < sarahsDog.recommendedFood * 1.1
) {
  console.log('Dog is eating okay');
} else if (sarahsDog.curFood < sarahsDog.recommendedFood) {
  console.log('Dog is eating too little');
} else {
  console.log('Dog is eating too much');
}

/*
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
*/

console.log(dogs);
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch, ownersEatTooLittle);

/*
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
*/

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

/*
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
*/

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

/*
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
*/

const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOkay));

/*
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
*/
const dogsEatingOkay = dogs.filter(checkEatingOkay);

console.log(dogsEatingOkay);

/*
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects �)
*/
const sortDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(sortDogs);
