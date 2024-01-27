// To store the data 
// localStorage.setItem('key','value');

// To get the data 
// localStorage.getItem("firstName")

// To clear the data 
// localStorage.clear()

// THINKS TO REMEMBER : 
// If we are storing an array or an object, we should stringify it first to keep the format unless otherwise we lose the array structure or the object structure of the original data.


// localStorage.setItem('firstName','Bikash')
// console.log(localStorage);

// localStorage.setItem('Caste','Ghimire');
// console.log(localStorage);

// localStorage.setItem('age',200)
// console.log(localStorage);

// If we are storing an array or an object, we should stringify it first to keep the format unless otherwise we lose the array structure or the object structure of the original data.

// const skills = ['HTML', 'CSS', 'JS','React']
// const mySkilss = JSON.stringify(skills, undefined, 4)
// localStorage.setItem('skills', mySkilss);
// console.log(localStorage);


// const skills = [
//     'HTML', 'CSS', 'JS', 'React'
// ]
// const skillsMine = JSON.stringify(skills)
// localStorage.setItem('skills', skillsMine)
// console.log(localStorage);


// const myId= {
//     name:'Neymar',
//     age:10,
//     skills :['Vue','Angular','Php']
// }
// const myObj = JSON.stringify(myId)
// localStorage.setItem('myId', myObj);
// console.log(localStorage);

// Getting item from localStorage

// localStorage.getItem('key')

// let firstName = localStorage.getItem('firstName')
// let age = localStorage.getItem('age')
// let skills = localStorage.getItem('skills')
// console.log(firstName,age,skills);

// let skills = localStorage.getItem('skills')
// let mySkills = JSON.parse(skills, undefined, 4)
// console.log(mySkills);

// let skilled = localStorage.getItem('skilled')
// let mySkilled = JSON.parse(skilled,undefined,4)
// console.log(mySkilled); //  Output : null becoz there is no data of skilled 

// Clearing the localStorage        
// localStorage.clear()

// let myInfo = {
//     name:'Messi',
//     caste :'Lionel',
//     age:32,
//     country:'Argentina',
// }
// let messi = JSON.stringify(myInfo,undefined,4)
// localStorage.setItem('myInfo',messi)
// console.log(localStorage);

