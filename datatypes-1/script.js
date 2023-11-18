// 2 types of data types 
// 1. Primitive  : Number,String,Boolean,Null,Undefined,Symbol
// 2. Non-Primitive  : Object and array 

// boolean ex 

// let num1 = 2
// let num2 = 2
// console.log(num1===num2)      //true

// let num1 = 2
// let num2 = 3
// console.log(num1===num2)      //false


// non primitive ex 

// let nums = [1,2,3];
// nums[0]=10+10;
// console.log(nums)    // 20 ,2,3


// let nums = [1,2,3];
// let numbers = nums;
// console.log(nums===numbers);  // true


// concat
// let name = "Bikash"
// let caste = " Ghimire"
// let fullName = name + caste
// console.log(fullName); // Bikash Ghimire


// template literals  `${}` 

// let num1 = 2
// let num2 = 3 
// console.log(`The sum of ${num1} and ${num2} is ${num1+num2}`) // The sum of 2 and 3 is 5 

// const a = 2
// const b = 3
// console.log(`${a} is lesser than ${b}`)  // 2 is lesser than 3 


// length 
// const js = "JavaScript"
// console.log(js.length);   // 10 

// to UpperCase  () 
// const js = "javascript"
// console.log(js.toUpperCase());    // JAVASCRIPT


// toLowerCase
// const js = "javascript"
// console.log(js.toLowerCase());    // javascript


// split () method   --> Chnages into array 

// const spilt = '30 days of JS' 
// console.log(spilt.split());  // ['30 days of JS']

// const spilt = '30 days of JS' 
// console.log(spilt.split(' '));  // ['30' 'days' 'of' JS']


// trim [ removes the spaces in the begining or at the ending]
// const trim = " hello world "
// console.log(trim.trim(' '));     // hello world 

//  Day 2 challanges

// const challenge = '30 Days Of JavaScript'
// console.log(challenge.split());


// const challanges1 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// const challanges2 = challanges1;
// console.log(challanges2.split(" "));  


// const challanges3 = '30 days of JavaScript'
// const replace = challanges3.replace('JavaScript','Python')
// console.log(replace);  // '30 days of Python'


// const challanges3 = '30 days of JavaScript'
// console.log(challanges3.charAt(15));   // J


// const challanges3 = '30 days of JavaScript'
// console.log(challanges3.charCodeAt('J'));  // 51

// let phrase = "30 Days Of JavaScript";
// let position = phrase.indexOf("a");

// console.log("Position of 'a':", position);  // 4 

// let phrase = "30 Days Of JavaScript"
// let solve = phrase.lastIndexOf('a')
// console.log("Position of a :", solve);


// const result = 'You cannot end a sentence with because because because is a conjunction'
// const solve  = result.search('because');
// console.log('The word because is in ' + solve + " letter" ); //The word is in 31 letter


// let time = ' 30 days '
// let sub = 'js'
// let timeSub = time + sub ;
// console.log( timeSub);  // 30 days of js


// const js = '30 Days Of JavaScript' 
// console.log(js.repeat( 2));


// const js = '30 Days Of JavaScript'
// console.log(js.slice(2));

// const jss = '30 Days Of JavaScript'
// console.log(jss.substring(2));