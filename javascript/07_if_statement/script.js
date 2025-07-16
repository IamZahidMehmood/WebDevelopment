let userName=prompt("Please enter your Name: ")
let userAge=parseInt(prompt("Please enter your age"))


// console.log(`Name: ${userName}`)
// console.log(`Age: ${userAge}`)
if(userName === null || userName === ''){
    userName="zahid";
}
if(userAge === null || userAge === ''){
    userAge=24;
}
console.log(`user Name is ${userName}`)
console.log(`user Age is ${userAge}`)
// if(userAge>=18 && userAge<=24){
//     console.log("user is a college student.")
// }else if(userAge>=25 && userAge<=40){
//     console.log("user is a working professional.")
// }