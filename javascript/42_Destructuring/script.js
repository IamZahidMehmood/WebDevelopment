
const colors=['red','pink','yellow','Green','orange','black']

// const color=colors[0]
// const color1=colors[1]
// const color2=colors[2]
// const [color,color1,color2]=colors
// const [,,color]=colors

const user={
    name:'zahid',
    age:34,
    address:{
        city:'Rawalpindi',
        code:4600,
    }
}
// const userAge=user.age
// const userName=user.name
// const {name:userName,age:userAge}=user
// const {address}=user
// const {address:{city}}=user
// const {address}=user
// const {city}=address
// function intro({age,name}){
//     console.log(age,name)
// }
// intro(user)
function printColor([a,b,,]){
    console.log([a,b,c])
}
printColor(colors)