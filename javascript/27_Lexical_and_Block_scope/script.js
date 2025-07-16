
const username='Zahid'
let userAge=34
var a=12

// function add(){
//     const x=5
//     const y=8
//     console.log(x+y)
//     console.log(username)
// }
function subtract(){

    const x=5
    const y=8
    const z=24
    console.log(x+y)
    console.log(username)
    //Lexical scope:child ka apne variable ka scope, iss k parent ka 
    // child function ka lexical scope kya hai, iss ka khud ka scope , iss ke parent ka scope and uss ke parent ka scope
    function child(){
        const childName='Golu'
        console.log(childName)
        console.log(z)//jab b inner function outer function k variable ko use krta hai to inner function aik closure bna leta hai, yani relation bna leta hai
        console.log(a)
        function grandChild(){
            const grandChildName='molu'
            console.log(grandChildName)
        }
    }
    child()
}
{
    const num1=356
}
console.log(num1)
// add()
subtract()
console.log(username)
console.log('Program Ended')
// console.log(y)