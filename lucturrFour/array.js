let marks = [250,200,150,580,242,280,290]
console.log(marks)
console.log(marks.length)

//Value of index change 
console.log(marks[0] = 200)
console.log(marks)

//Loops
let names = ["usman","ali","usama","suleman","numan"]
for(index = 0; index<names.length;index++){
    console.log(names[index])
}

//For of loop
for(let el of names){
    console.log(el.toUpperCase())
}

//Practice
let mark = [100,200,240,130,550,125,180,189,153]
console.log(mark)
let sum = 0;
// for(let val of mark){
//     sum = sum +val
// //    sum += val
// }
// console.log(sum)

//Using Simple for loop
for(i =0;i<mark.length;i++){
    sum = sum + mark[i]
}
console.log(sum)

//Practice
let num = [200];
// for(let i = 0; i<num.length;i++){
//     let offer = num[i] * 10 
//     console.log(offer)  
//     num[i] = num[i] - offer 
//     console.log(num[i])
// }

// let ind =0
// for(let val of num){
//     let offer = val / 10;
//     num[ind] = num[ind] -offer
//     console.log(num[ind])
// }


for (let index = 0; index < num.length; index++) {
    let offer = num[index] / 10;
    console.log("Hlo",num[index]);
    num[index] = num[index] - offer;
    
}
console.log(num);