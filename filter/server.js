// const arr = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const output = arr.filter((word) => word.length < 6)
// console.log(output);

// const fruits = ["Apple", "Banana", "Grapes", "Mango", "Orange"];
// const lowerCaseFruits = fruits.map((fruit) => fruit.toLowerCase());
// console.log(lowerCaseFruits);


// const fruits = ["Apple", "Banana", "Grapes", "Mango", "Orange"];

// function hell(arr,query) {
//     return fruits.filter((f) => f.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(hello(fruits,'ap'));


// let users = [
//     { name: 'John', age: 25, occupation: 'gardener' },
//     { name: 'Lenny', age: 51, occupation: 'programmer' },
//     { name: 'Andrew', age: 43, occupation: 'teacher' },
//     { name: 'Peter', age: 81, occupation: 'teacher' },
//     { name: 'Anna', age: 47, occupation: 'programmer' },
//     { name: 'Albert', age: 76, occupation: 'programmer' },
// ]
// let filteredUsers = users.filter((user) => {
//     return user.age > 40 && user.occupation === 'programmer'
// })
// console.log(filteredUsers);


// const people = [
//     { name: "aaron", age: 65 },
//     { name: "beth", age: 2 },
//     { name: "cara", age: 13 },
//     { name: "daniel", age: 3 },
//     { name: "ella", age: 25 },
//     { name: "fin", age: 1 },
//     { name: "george", age: 43 },
// ]
// const filteredPeoples = people.filter((peopless) => peopless.age <= 3
// )
// console.log(filteredPeoples);


// let team = [
//     {
//         name: "aaron",
//         position: "developer"
//     },
//     {
//         name: "beth",
//         position: "ui designer"
//     },
//     {
//         name: "cara",
//         position: "developer"
//     },
//     {
//         name: "daniel",
//         position: "content manager"
//     },
//     {
//         name: "ella",
//         position: "cto"
//     },
//     {
//         name: "fin",
//         position: "backend engineer"
//     },
//     {
//         name: "george",
//         position: "developer"
//     },

// ]

// const filteredTeams = team.filter(teamed => teamed.position==='developer')
// console.log(filteredTeams);

// const filteredTeams = team.filter((teamUp) => {
//     return teamUp.position === 'developer'
// })
// console.log(filteredTeams);


// let winners = ["Anna", "Beth", "Cara"]

// // console.log(`Won gold medal by ${winners[0]}`);

// let gold = winners.filter((winner, index) => index === 0)
// let silver = winners.filter((winner,index) => index === 1)
// let bronze = winners.filter((winner,index) => index === 2)

// console.log(`Gold Winner : ${gold}`);

// const filteredPeoples = people.filter((p)=>{
//     return p.age<=13
// })
// console.log(filteredPeoples);

let people = [
    { name: "aaron", age: 65 },
    { name: "beth", age: 15 },
    { name: "cara", age: 13 },
    { name: "daniel", age: 3 },
    { name: "ella", age: 25 },
    { name: "fin", age: 16 },
    { name: "george", age: 18 },
]


let condn = {
    lower: 3,
    upper: 18,
}

const filteredPeoples = people.filter((person) => {
    return person.age >= condn.lower && person.age <= condn.upper;
})
console.log(filteredPeoples);