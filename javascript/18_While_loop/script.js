// let num=0
// while(num<5){
//     console.log(num)
//     num++;
// }
const friends=['zahid','tahir','shahid','badr','waqas','usman','majid','musa','sultan']
let i=0
while(i<friends.length){
    console.log(`${i+1}. ${friends[i]}`)
    friends[i]=friends[i]+ ' Proocoder'
    i++
}