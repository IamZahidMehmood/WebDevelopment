// const months=['January','February','March','April','May']
// const updatedMonths=months.filter((month,index)=>{
//     console.log(month)
//     return month.toLowerCase().includes('m')
// })

const students=[
    {
        name:'Zahid',
        age:17,
    },
    {
        name:'Tahir',
        age:23,
    },
    {
        name:'shahid',
        age:32,
    },
    {
        name:'Hassam',
        age:12,
    },
]
const adultStudents=students.filter((student)=>{
    return  student.age>=18
}).map((student)=>{
    return student.name
}).filter((student)=>{
    return student.includes('s')
})


// months.forEach((month)=>{
//     console.log(month)
// })

// const newMonth=months.map((month)=>{
//     console.log(month)
//     return month
// })

// console.log(
//     months.map((month,index)=>{
//         console.log(index+1,month)
//         return month
//     })
// )
// const newMonth=months.map((month,index)=>{
//     console.log(index+1,month)
//     return month
// })
// console.log("********************")
// const newMonth1=months.forEach((month,index)=>{
//     console.log(index+1,month)
//     return month
// })