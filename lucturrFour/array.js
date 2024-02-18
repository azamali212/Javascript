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