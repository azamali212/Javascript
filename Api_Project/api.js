const URl = "https://cat-fact.herokuapp.com/facts"
let para = document.querySelector("#para")

// let promise = fetch(URL)
// console.log(promise)

//Using Aysnc Await
// let getData = async () => {
//     let response = await fetch(URl)
//     console.log(response.status)
// }



//Fetch data using Ajax or usin json in old when the data is fetched with XML formate now we fetched data json formate 
//Json is javascript Object Notation , api response convert it to javascript object and then show and json is a aysnc function

let getData = async () => {
    let response = await fetch(URl)
    let data = await response.json() //json() funciton is used to readable data
    //We set it to html page 
    para.innerText = data[0].text
}
getData()