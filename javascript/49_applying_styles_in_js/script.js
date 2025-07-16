// document.querySelector('h1').setAttribute('id','heading')
// document.querySelector('h1').style.backgroundColor='green'
// document.querySelector('h1').style.color='blue'
// document.querySelectorAll('a').style.color='red'
const allLinks=document.querySelectorAll('a')
// allLinks[0].style.color='red'
// allLinks[1].style.color='red'
// allLinks[2].style.color='red'
// allLinks[3].style.color='red'
// for(let i=0;i<allLinks.length;i++){
//     allLinks[i].style.color='red'
// }
for(let links of allLinks){
    // links.style.color='teal'
    // links.style.textDecoration='none'
    // links.style.fontWeight='700'
    // links.style.cssText=`font-weight:700;
    // text-decoration:none;
    // font-size:18px;
    // font-family:cursive;`
    // links.className='my-link green_link'
    // links.setAttribute('class','green_link')
    links.classList.add('test')
    links.classList.remove('test')
    links.classList.toggle('test')
}
