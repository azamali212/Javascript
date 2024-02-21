//Callback function whos function that one function pass to other function as a argument , example 
// Example of using a callback function for asynchronous operations (Node.js style)
// function fetchDataFromServer(callback) {
//     setTimeout(() => {
//         const data = "Some data fetched from server";
//         callback(data);
//     }, 1000); // Simulating a delay of 1 second
// }

// function processData(data) {
//     console.log("Processing data:", data.toUpperCase());
// }

// fetchDataFromServer(processData); // Callback function processData is passed as an argument, its also called higher order function

//Foreach mehtod ,foreach method always use for only arrays not use for strings , change orignal array 
// let arr = [1,2,5,2,8,2,1]
// arr.forEach(function(val){
//     console.log(val)
// })

//Eample 
// let num = [1,2,3,4,5,6,7]
// num.forEach((val)=>{
//     let square = val * val
//     console.log(square)
// })

//Map is method that create a new array and apply all funcitonlity on it like foreach,just return new array

let arr = [2,5,25,42,4,2]

//Old mehtod 
// function newFunc(val){
//     return val * val
// }

// let newarr = arr.map(newFunc)

// console.log(newarr)

//New method 
let newarr = arr.map(function newFunc(val){
    return val * val
})
console.log(newarr)

//filter method is method that create new array and perform some condition after filter return new array baises on conditions
let num = [5,8,5,4]
let store = num.filter((val)=>{
    return val % 2 === 0
})

console.log(store)

//Reduce function we use it when calculate all value and return just single value ffrom the array 
let red = [5,4,8,5,2]
let output = red.reduce((prev,curr)=>{
    return prev > curr ? prev : curr
})
console.log(output)
