//We Study today Desturcturing , Rest , Spread Operator in Javascript 

// let product = {
//     id:1,
//     name :"Mobile",
//     price: 5000,
//     qty:5
// }
//if we add and property using run time we use same as using in dom same as in advance js 
// product.tax = 0.16

// console.log(product)

//Desturcturing

// let des = {
//     id:2,
//     name :"Mobile",
//     price: 5000,
//     qty:5
// }

//if we use any object property save in independent variable we use simple way or advance way using Desturcturing
// let p = des.price;
// let q = des.qty

//Now use Desturcturing
// let {price:p , qty:q} = des
// console.log(p,q)

// We use same Desturcturing in functions
// function pro({name,price}){
//     return ({name , price})
// }

// let save = pro(product)
// console.log(save)


//We use simple way to desturctur object and apply some calculation on it with two functions
// let product1 = {
//     id:1,
//     name :"Mobile",
//     price: 5000,
//     qty:5
// }

// let product2 = {
//     id:1,
//     name :"Mobile",
//     price: 5000,
//     qty:5,
//     discount:0.10
// }

// function productValueWithoutDiscount({price:p , qty:q}){
//     let total = p*q
//     return total
// }

// console.log(productValueWithoutDiscount(product1))

// function productValueWithDiscount({price:p , qty:q,discount}){
//     let total = p*q
//     return total * (1-discount)
// }

// console.log(productValueWithDiscount(product2))

//I work both function in one 
//Using discount with initilize by assignment operator = by 0

// function productValueWithDiscount({price:p , qty:q,discount = 0}){
//     let total = p*q
//     return total * (1-discount)
// }

// console.log(productValueWithDiscount(product2))
// console.log(productValueWithDiscount(product1))


//Rest Operator Means value after desturct and show other property of object 
// let product1 = {
//     id:1,
//     name :"Mobile",
//     price: 5000,
//     qty:5
// }

// let {price:p,...rest} = product1
// console.log(p)
// console.log(rest)
// console.log(product1)

//Spread Operator same work as rest but they copy of other object and store in varable and with seprate storage not same storge or origanle , spread opertor also use combind two aray or objects
// let product1 = {
//     id:1,
//     name :"Mobile",
//     price: 5000,
//     qty:5
// }

// let product2 = {...product1}
// console.log(product2)
// console.log(product1)
let ul = document.querySelector("ul")

fetch('data.json').then((response) => {
    // console.log(response.status)
    if (!response) {
        console.log("error")
    }
    return response.json();
}).then(data => {
    // console.log(data.status)
    let store = data.students
    // console.log(store)
    for (card of store) {
        let li = document.createElement("li")
        li.innerText = `${card.id}:${card.name}:${card.grade}`
        ul.appendChild(li)
    }
})

