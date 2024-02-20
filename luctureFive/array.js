// function comment(){ //Function definition
//     console.log("hlo")
// }
// comment() //we call it by name and also called invoke

// //Function Parameter ,Parameter is a input from te user and output when function call ,just like that
// function funName(name){
//     //this Parameter is local scop "name"
//     console.log(name)
// }
// funName("Hello") //Argument

// //Using print Value
// function sum(a,b){
//     console.log(a+b)
// }
// sum(4,5)

// //Using Return , after return any statement you write but they cannot run 
// function sum1(x,y){
//     s = x+y
//     return s
// }
// let val = sum1(2,5)
// console.log(val)

//Arrow Function in Es6
// const sum = (x,y) => {
//     console.log(x+y)
// }
// sum(5,4)

// const mul = (a,b) => {
//     return a*b
// }
// let val = mul(5,4)
// console.log(val)

//Example
function volve(v) {
    let count = 0;
    for (let char of v) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
        
    }
    console.log(count)
}
 volve("Heloo")