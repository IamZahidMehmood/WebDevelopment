let userName=prompt("Enter your name: ")
let userAge=parseInt(prompt("Enter your age: "))
if(userAge >= 0 && userAge <= 5){
    console.log(`${userName} is a child`)
    console.log("and he/she always play")
}
else if(userAge >= 6 && userAge <=19){
    console.log(`${userName} is a college going teenage`)
    console.log("and he/she is college going.")
}else{
    console.log(`${userName} is a professional`)
    console.log(" and he/she is doing a job");
}