// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus (number){
    return (plusNumber) => {
        return number + plusNumber ;
    }
}
let plus15 = plus(15);
console.log(plus15(10));

// Exercise 2 Section
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

// users.forEach(function(user){
//     console.log(user.name);
// });

// Exercise 3

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

let namesAndScores = users.map((user) => {
    return {name: user.name, score: user.score };
});

console.log(namesAndScores);