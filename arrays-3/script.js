// Arrays 

// Array constructor
// const arr = Array() 
// console.log(arr);   // creates an empty array 


// const numbers = [ 1,2,3,4,5,6]
// console.log(numbers.length);


// const arr = [
//     'Bikash',
//     'Apple',
//     { skills: ['html', 'CSS'] },
//     {country : 'United States',city:'ktm'}
// ]
// console.log(arr);

// const js = 'Javascript'
// const py = js.split('  ')
// console.log(py);

// chnaging the index name 
// const listFruits = ['apple','banana','mango']
// console.log(listFruits[0]='mango');

// const eightValues = Array(8).fill('y')
// console.log(eightValues);

// const twoValues = Array(2).fill('B')
// console.log(twoValues);

// To concatenate two arrays.
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = arr1.concat(arr2)
// console.log(arr3);

// const fruits = ['apple', 'banana', 'mango']
// const index = fruits.indexOf('apple')
// index === -1 ? console.log('It exits') : console.log('Not exists');
// console.log(index);

// const fruits = ['apple', 'banana', 'mango']
// const fruitsTostring = fruits.toString()
// console.log(fruitsTostring);

// slice method 
// const names = ['tom', 'champ', 'ram', 'shyam', 'gita']
// console.log(names.slice(0, 2));  // tom,champ is included but ram is not included 
// slice methods takes the first index but doesnt takes the last index

// const nums = [1, 2, 3, 4, 5]
// console.log(nums.slice(1, 4));

// splice method
// const name = ['tom', 'champ', 'ram', 'shyam']
// name.splice(1, 2, 'HI')  // inplace of index of 1,2 (Hi) overtakes it 
// console.log(name);

// const pushArr = [1, 2, 3, 4, 5]
// pushArr.push(6)
// console.log(pushArr);

// const fruits = ['apple', 'orange', 'mango']
// // fruits.push('guava')
// console.log(fruits.slice(0,2));


// pop :  //removes the last element

// const nums= [1,2,3,4,5,6]
// nums.pop()
// console.log(nums);  // 1,2,3,4,5

// shift :  removes the begining element

// const nums = [1,2,3,4,5,6]
// nums.shift()
// console.log(nums);

// unshift  adds the element to the starting position
// const nums = [1,2,3,4,5,6]
// nums.unshift(0)
// console.log(nums);

// reverse 
// const numbers = [1,2,3,4,5]
// numbers.reverse()
// console.log(numbers);


1.// empty arr 
// const arr = Array()
// console.log(arr);

2.
// const arrays = [1,2,3,4,5]
// // console.log(arrays.length);
// console.log(arrays[0]);
// console.log(arrays[2]);
// console.log(arrays[4]);


// const mixedDataTypes = [1, "Hello", 3.14, true, { key: "value" }];
// const arrayLength = mixedDataTypes.length;

// console.log("Mixed Data Types Array:", mixedDataTypes);
// console.log("Length of the Array:", arrayLength);

// const itCompanies = ["facebook", "Google", "Microsoft", 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log('There are :',itCompanies.length, 'ITcompany' );
// console.log(itCompanies[0]);
// console.log(itCompanies[3]);
// console.log(itCompanies[6]);

// const itCompanies = ["facebook", "Google", "Microsoft", 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(itCompanies.includes('facebook'));
// if(itCompanies.includes('Google')){
//     console.log('Company Found');
// }
// else{
//     console.log('Not found');
// }

// itCompanies.includes("Google") ? console.log('Company found') : console.log('Company not found')

3
// const itCompanies = ["facebook", "Google", "Microsoft", 'Apple', 'IBM', 'Oracle', 'Amazon']
// itCompanies.reverse()
// console.log(itCompanies.splice(0,4));

// const itCompanies = ["facebook", "Google", "Microsoft", 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(itCompanies.sort());

// const itCompanies = ["facebook", "Google", "Microsoft", 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(itCompanies.toString().toUpperCase());

// const itCompanies = ["facebook", "Google", "Microsoft", 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(itCompanies.slice(3));

// to remove the first elemnt from the array ... 
// const itCompanies = ["facebook", "Google", "Microsoft", 'Apple', 'IBM', 'Oracle', 'Amazon']
// itCompanies.shift(0);
// console.log(itCompanies);

// const itCompanies = ["facebook", "Google", "Microsoft", 'Apple', 'IBM', 'Oracle', 'Amazon']

// const itCompanies = ["facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// itCompanies.splice(0, itCompanies.length);

// console.log(itCompanies);