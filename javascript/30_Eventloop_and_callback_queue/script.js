console.log("hello world!")

function hello(){
    console.log("Hi-1")
}
hello()
setTimeout(hello,1000)
setTimeout(hello,2000)
setTimeout(hello,3000)

setTimeout(function(){
    console.log("hello!!!!!")
},4000)
 for(let i=1;i<=4;i++){
    console.log(i)
 }
 console.log("Hi-2")

 //synchronus wo hote jo directly callstack main jaate, and asynchronous wo hote jo pehle APIS main jaate then callback queue main jaate and evenloop check krta k call stack haali ya nehi agar haali to we callback queue se unain call stack main le jaata

//  In ko check krne k liye website hai "loupe"