// jab hum outer function main inner function ko return krwaate hain and outer function ko kuch ya sab variables ko inner function main use krte hain to in ka aapas main closures relation ban jaat ,  
// const a = 4
// const b = 5

function parent(){
    const a = 4
    const b = 5
    function add(){
        console.log(a+b)
    }
    return add
}

const add1=parent()
console.log(add1)