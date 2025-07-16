debugger
function introduceMe(){
    console.log("hi")
    introduceMe()//recursion khud ko call krte rehna, iss se stack overflow ho jae ga rought 10thousand times chal k
}
introduceMe()
//call stack aik mechanism hai, jis k through javascript ka engine track krta k wo code k kis line pe hai