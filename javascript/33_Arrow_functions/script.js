//There are three ways to create a function
//1.Function declaration 2.Function Expression 3.Arrow Function Expression
// 1.
// function square(num){
//     return num*num
// }
// 2.
// const square=function(num){
//     return num*num
// }
// 3.
// const square=(num)=>num*num //value return in a implicit way without use of return keyword

const add=(a,b) => a+b
const square=(num)=>{
    return num*num
}
setTimeout(()=>{
    console.log("hiii!")
},3000)

const random = () => Math.floor(Math.random()*10)+1