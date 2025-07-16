// 'use strict'
// const fruits=['banana','grapes','orange','peach','apple']
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }
// console.log("*********************")
// for(const fruit of fruits){
//     console.log(fruit)
// }
// console.log("**********************")
// const user='zahid mehmood'
// for(const letter of user){
//     console.log(letter)
// }
const person={
    firstName:'zahid',
    lastName:'Mehmood',
    age:50,
    eyeColor:'blue',
    city:'Rawalpindi'
}
// for(const key in person){
//     console.log(key,':',person[key])
// }
const personKeys=Object.keys(person)
const personValues=Object.values(person)
const personEntries=Object.entries(person)
for(const key of personKeys){
    console.log(key,':',person[key])
}