const num=[1,2,3]
num.reduce((accumulator,current,i)=>{
    // console.log(i,current)
    console.log(accumulator,current)
    return current+accumulator
},0)