const time1=setTimeout('console.log("Hi-1")',1000)
const time2=setTimeout('console.log("Hi-2")',2000)
const time3=setTimeout(a(),3000)

function a(){
    console.log("hi world!")
}