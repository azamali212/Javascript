// const URl = "https://cat-fact.herokuapp.com/facts"
// let para = document.querySelector("#para")

// let promise = fetch(URL)
// console.log(promise)

//Using Aysnc Await
// let getData = async () => {
//     let response = await fetch(URl)
//     console.log(response.status)
// }



//Fetch data using Ajax or usin json in old when the data is fetched with XML formate now we fetched data json formate 
//Json is javascript Object Notation , api response convert it to javascript object and then show and json is a aysnc function

// let getData = async () => {
//     let response = await fetch(URl)
//     let data = await response.json() //json() funciton is used to readable data
//     //We set it to html page 
//     para.innerText = data[0].text
// }
// getData()

//----------------------------------------//
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.3.2/v1/currencies/";

let dropdowns = document.querySelectorAll(".dropdown select")
let btn = document.querySelector("form button")
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
// console.log(btn)

for (let dropdown of dropdowns) {
    // console.log(dropdown.name)
    for (datas in countryList) {
        let newOptions = document.createElement("option")
        newOptions.innerText = datas
        newOptions.value = datas
        //true && true = true
        if (dropdown.name === "from" && datas === "USD") {
            newOptions.selected = "selected"
        } else if (dropdown.name === "to" && datas === "INR") {
            newOptions.selected = "selected"
        }
        dropdown.appendChild(newOptions)

    }

    //When change the value of current dropdown then call the function updateFlage and change the flage from api 
    dropdown.addEventListener("change", (evt) => {
        updateFlage(evt.target)
    })
}

const updateFlage = (element) => {
    let code = element.value;
    console.log(code)
    let dataCode = countryList[code]
    console.log(dataCode)
    //console.log(dataCode)
    let newSrc = `https://flagsapi.com/${dataCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
} 

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
  
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  };

  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
  });

  window.addEventListener("load", () => {
    updateExchangeRate();
  });

