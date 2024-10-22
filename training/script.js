'use strict';

/* Метод sort() - toSorted() 

// array

const mass = ['a', 'b', 'f', 'i', 'M', 'k', 'c', 'd'];
const mass2 = [1, 33, 22, 55, 44, 17];

const newMass = mass.toSorted((a, b) => {
  return a.localeCompare(b);
});

const newMass2 = mass2.toSorted((first, second) => {
  return second - first;
});

console.log(newMass);
console.log(newMass2);

// object

const obj = [
  {
    name: 'Optimus',
    age: 114,
  },
  {
    name: 'Bambelbee',
    age: 36,
  },
  {
    name: 'Arktrone',
    age: 220,
  },
];

const result = obj.toSorted((first, second) => {
  // Сортування по типу String
  return first.name.localeCompare(second.name.localeCompare);
  // Сортування по типу Number
  //   return second.age - first.age;
});

// console.log(result);

*/

// const users = [
//   {
//     name: 'Harry Potter',
//     age: 17,
//     level: 8,
//   },
//   {
//     name: 'Gerold',
//     age: 220,
//     level: 7,
//   },
//   {
//     name: 'Albus Dambldor',
//     age: 128,
//     level: 10,
//   },
//   {
//     name: 'Ron',
//     age: 16,
//     level: 6,
//   },
// ];

// function helloSorted(mass, callback) {
//   return mass.toSorted((first, second) => {
//     return callback(first, second);
//   });
// }

// const condition = (a, b) => {
//   return b.name.localeCompare(a.name);
// };

// console.log(helloSorted(users, condition));
