// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

// function plus (number){
//     return (plusNumber) => {
//         return number + plusNumber ;
//     }
// }
// let plus15 = plus(15);
// console.log(plus15(10));

// console.log("EXERCISE 2:\n==========\n");
// // let users = [
// //     {
// //     name: "Frodo",
// //     age: 50,
// //     score: 85,
// //     isActive: false,
// //     },
// //     {
// //     name: "Sam",
// //     age: 38,
// //     score: 94,
// //     isActive: true,
// //     },
// //     {
// //     name: "Merry",
// //     age: 36,
// //     score: 82,
// //     isActive: true,
// //     },
// //     {
// //     name: "Pippin",
// //     age: 26,
// //     score: 77,
// //     isActive: false,
// //     },
// // ];

// // users.forEach(function(user){
// //     console.log(user.name);
// // });

// console.log("EXERCISE 3:\n==========\n");

// let users = [
//     {
//     name: "Frodo",
//     age: 50,
//     score: 85,
//     isActive: false,
//     },
//     {
//     name: "Sam",
//     age: 38,
//     score: 94,
//     isActive: true,
//     },
//     {
//     name: "Merry",
//     age: 36,
//     score: 82,
//     isActive: true,
//     },
//     {
//     name: "Pippin",
//     age: 26,
//     score: 77,
//     isActive: false,
//     },
// ];

// let namesAndScores = users.map((user) => {
//     return {name: user.name, score: user.score };
// });

// console.log(namesAndScores);

// console.log("EXERCISE 4:\n==========\n");
// let users = [
//     {
//     name: "Frodo",
//     age: 50,
//     score: 85,
//     isActive: false,
//     },
//     {
//     name: "Sam",
//     age: 38,
//     score: 94,
//     isActive: true,
//     },
//     {
//     name: "Merry",
//     age: 36,
//     score: 82,
//     isActive: true,
//     },
//     {
//     name: "Pippin",
//     age: 26,
//     score: 77,
//     isActive: false,
//     },
// ];

// let activeUsers = users.filter((user) => user.isActive == true)
// console.log(activeUsers);

// console.log("EXERCISE 5:\n==========\n");
// let users = [
//     {
//     name: "Frodo",
//     age: 50,
//     score: 85,
//     isActive: false,
//     },
//     {
//     name: "Sam",
//     age: 38,
//     score: 94,
//     isActive: true,
//     },
//     {
//     name: "Merry",
//     age: 36,
//     score: 82,
//     isActive: true,
//     },
//     {
//     name: "Pippin",
//     age: 26,
//     score: 77,
//     isActive: false,
//     },
// ];

// users.sort((a, b) => b.score - a.score); 
// console.log(users);

// console.log("EXERCISE 6:\n==========\n");
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

const sumOfScores = users.reduce((sum, user) => sum + user.score, 0)
const averageScore = sumOfScores / users.length;
console.log("Sum of all scores:", sumOfScores);
console.log("Average score:", averageScore);