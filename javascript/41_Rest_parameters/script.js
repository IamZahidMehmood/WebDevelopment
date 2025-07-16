
const num1=[1,2,3,4]

// function add(a,b,c,...num){
//     console.log(a,b,c)
//     console.log(num)
//     let sum=0
//     for(let i=0;i<num.length;i++){
//         sum += num[i]
//     }
//     return sum
// }
// function add(...num){
//     return num.reduce((acc,curr)=>acc+curr)
// }
// function add(){
//     return [...arguments].reduce((acc,curr)=>acc+curr)
// }
function add(){
    return Array.from(arguments).reduce((acc,curr)=>acc+curr)
}


const result=add(...num1)