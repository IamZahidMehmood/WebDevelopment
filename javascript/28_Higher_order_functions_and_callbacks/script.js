
// function ke andar function pass krne se function higher order function ban jaata
// function a(b){
//     // console.log(typeof(b))
//     console.dir(b)
//     b()

// }

// function sayHello(){
//     console.log("Hiiiiiiiii!")
// }
// a(sayHello)
//Anonymous function
//kisi b function ko call krte waqt kisi dosre function ko pass kiya jata hia,to jo function paass kiya jata hai usse call back function kehte hain

// function(){
//     console.log("Hiiiiiiiii!")
// }

//callback function
// a(function(){
//     console.log("Hiiiiiiiii!")
// })
// a('Hiii')
// a({name:'zahid',age:45})
// a([3,'tahir','Shahid','zahid'])
//array is also an Object

// console.dir('hfhdhfo')
// console.dir(45454)
// console.dir(a)
//function is an object,so we can store function into any variable, as we did in previous lectures

function a(b){
    // console.log(typeof b)
    console.log(b)
    b()
}

function sayHello(){
    console.log('Hello hi')
}
a(sayHello)


// a('Hiiiii')
// a({username:'zahid',userAge:34})
// a([1,4,6,7])

// console.dir(a)
// a.age=56