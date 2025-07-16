const num1=[1,2,3,4]
const num2=[5,6,7,8,9,10]
// const str='Zahid'
// // const joinedArray=num1.concat(num2)
const joinedArray=[...num1,...num2]

// const user={
//     name:'zahid',
//     age:23,
// }
// const updatedUser={...user,city:'Rawalpindi'}
function add(){
    let sum=0
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum
    // console.log(arguments)
}