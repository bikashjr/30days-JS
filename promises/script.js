// Asynchronous  

// setTimeout(function(){
//     console.log('Starting Promises');
// },3000)

// console.log('started');
// setTimeout(function(){
//     console.log('Starting Promises');
// },3000)
// console.log('ended');

// Fetch 
// 1. declaring and assigning to a link 
// 2. fetch (url)
// 3. converting response to a json 
// 4. log data 

// const url = 'https://restcountries.com/v2/all'
// fetch(url)
// .then(response => response.json())
// .then(data => {
// console.log(data);
// })

// const fetchData = async () => {
//     const url = 'https://restcountries.com/v2/all'
//     try {
//       const response = await fetch(url)
//       const countries = await response.json()
//       console.log(countries)
//     } catch (err) {
//       console.error(err)
//     }
//   }
//   console.log('===== async and await')
//   fetchData()

// const fetching = async () => {
//     try {
//     const url = 'https://restcountries.com/v2/all'
//         const response = await fetch(url)
//         const countryList = await response.json()
//         console.log(countryList);
//     } catch (error) {
//         console.log(err);
//     }
// }
// fetching()

// const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// fetch(catsAPI)
// .then(response => response.json())
// .then(data => console.log(data))

// const fetchCatsApi = async () => {
//     const catsAPI = 'https://restcountries.com/v2/all'
//     try {
//         const response = await fetch(catsAPI)
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchCatsApi()