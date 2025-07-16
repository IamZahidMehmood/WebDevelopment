const fruits=['banana','grapes','orange','peach','apple']
// for(const fruit of fruits){
//     console.log(fruit)
// }
// fruits.forEach(function(){
//     console.log("hi")
// })
fruits.forEach((fruit)=>console.log(fruit))

// for(const fruit of fruits){
//     console.log(fruit)
// }

// fruits.forEach(function(fruit){
//     console.log(fruit)
// })


//here forEach() is a best example of higher order function because we are passing another function as an argument in this function
//and the function that is passed is an callback function and also anonymous function and arrow function also

// fruits.forEach((fruit)=>{
//     console.log(fruit)
// })

// function abc(el){
//     console.log(el)
// }
// fruits.forEach(abc)