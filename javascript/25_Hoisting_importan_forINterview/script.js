// console.log(nam)
debugger
// const nam='zahid'
// var nam='Tahir'
// let,var,const  sab main aisa hi hota
//agar kisi variable ko initialize kiya bina access krne k koshih krain and error na aae tw means who hoist ho chucka hai
//var k time error nehi aae ga, and const k time error to aae ga but const main be ye variable hoist ho chucka hai but ye temporal dead zone main chala jaata wahan se access krna easy nehi hota

// function definition
// function declaration 
function introduceMe(){
    console.log("hi")
}
introduceMe()
//functions memory creation phase main hi hoist ho jaata 
// sayHi()

// function definition
// function Expression
var sayHi=function(){
    console.log("hiiii")
}
sayHi()