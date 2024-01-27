//  What is map method ? 
// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

// const arr = [1,5,9,11];
// const arr1 = arr.map(double => double *2 );
// console.log(arr1);

// const numbers = [1, 4, 9];
// const sq = numbers.map(sqrt => Math.sqrt(sqrt));
// console.log(sq);

// const str = ['1','2','3','4','5','6']
// const int = str.map(strs => parseInt(strs,10));
// console.log(int);


const products = [
    { name: "sports car" },
    { name: "laptop" },
    { name: "phone" },
];
const productsWithPrice = products.map(products => {
    return { ...products, price: 100 }
})
console.log(productsWithPrice);