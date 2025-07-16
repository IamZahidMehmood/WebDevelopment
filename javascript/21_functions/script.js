function introduceMe(name,job,age){
    // if(name===undefined){
    //     name='Ahmad'
    // }
    // if(!name){
    //     name='Ahmad'
    // }
    console.log("1.Hi,")
    console.log(`My name is ${name || 'Usman'} Mehmood.`)
    console.log(`And I am ${job}`)
    console.log(`I am ${age} years old`)
}
introduceMe('zahid','Software Engineer',25)
introduceMe('Tahir','Application Developer',33)
introduceMe('Shahid','Mechanical Engineer',55)
introduceMe()