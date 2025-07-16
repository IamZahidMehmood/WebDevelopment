const evenNumbers = [0,2,4,6,9,8]
const result=evenNumbers.some((num,i)=>{
    // console.log(num,i,array)\
    // debugger
    if(num%2===1){
        console.log(i)
    }
    return num%2===1
})