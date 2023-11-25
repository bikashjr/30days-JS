// const number = [1,2,3]
// let [num1 , num2,num3] = number
// console.log(number);


// const fullStack = [ 
//     ['html' ,'css' ,'js'],
//     ['node','mongodb','express']
// ]
// const [frontend,backend ]= fullStack;
// console.log(fullStack);


// const num = [1, 2, 3]
// const [num1, , num3] = num;
// console.log(num1,num3);  // 2 is negelacted

// rest operators 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const [num1, num2, num3, num4, num5, ...rest] = numbers
// console.log(num1,num2,num3,num4,num5);
// console.log(rest);


// const rectangle = {
//     width: 30,
//     height: 10,
//     area: 50
// }
// let { width: w, height: h, area: a, perimeter = 60 } = rectangle;
// console.log(w , h, a, perimeter);


// spread operator
// const user = {
//     name:'bikash',
//     caste : 'ghimire',
//     rollNo : 12,
// }

// const user2 = { ...user}
// console.log(user2);