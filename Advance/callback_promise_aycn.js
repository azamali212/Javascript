//Callback function is used to async for old javascript and callback is used one function to pass other function as an argument 
// function sum(a,b){
//     console.log(a+b)
// }

// function value(callback){
//     callback(5,5)
// }

// value(sum)

// Function to fetch data from an API
// function fetchData(url, callback) {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             // Execute the callback function with the fetched data
//             callback(null, data);
//         })
//         .catch(error => {
//             // If an error occurs, pass it to the callback function
//             callback(error, null);
//         });
// }

// Usage: Fetching user data from an API and handling the response using a callback function
// fetchData('https://api.example.com/users', (error, data) => {
//     if (error) {
//         console.error('Error fetching data:', error);
//     } else {
//         console.log('Fetched data:', data);
//     }
// });


// In this example:

// We have a fetchData() function that accepts a URL and a callback function as arguments.
// Inside fetchData(), we use the fetch() API to make a request to the specified URL.
// We handle the response asynchronously using .then() and .catch() methods.
// If the request is successful, we invoke the callback function with null as the error parameter and the fetched data as the data parameter.
// If an error occurs during the fetch operation, we invoke the callback function with the error object as the error parameter and null as the data parameter.
// Finally, we call fetchData() with the URL and a callback function that handles the fetched data or error appropriately.
// This example demonstrates how callback functions can be used to handle asynchronous operations, such as fetching data from an API, in JavaScript. Callback functions provide a way to execute code after an asynchronous operation has been completed, making it possible to work with the results of the operation in a controlled manner.


//Exampls nested Callback hell
// function getData(getId,getNextId){
//     setTimeout(()=>{
//         console.log("data",getId)
//         if(getNextId){
//             getNextId()
//         }
//     },2000)
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })

//Promise , its a Solution of callback hell

let promise = new Promise((resolve,reject)=>{
    console.log("hello")
     //resolve("success")
     reject("error")
})
promise.then(()=>{
    console.log("Resolve")
}).catch((err)=>{
    console.log("Error",err)
})
