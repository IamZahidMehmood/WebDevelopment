// const allImages=document.images
// const allImages=[...document.images]
// const allImages=document.getElementsByTagName('img')
// const cssImage= document.getElementsByClassName('css_img')[0]
// const idImage=document.getElementById('css_img')
// document.querySelector('.css_img')
// document.querySelector('#css_img')
// document.querySelectorAll('#css_img')
// document.querySelector('[alt="javascript roadmap"]')
// const ul=document.querySelector('li')
// const ul=document.querySelector('.css-image')
// ul.innerHTML='hello world'
const allImages=document.querySelectorAll('img')
const images=[
    'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
    'https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=',
    'https://images.squarespace-cdn.com/content/v1/5d777de8109c315fd22faf3a/1693407136044-G90XQURX1GABMYGAS8K1/shutterstock_1288634614.jpg?format=2500w',
]
allImages[0].src=images[0]
allImages[1].src=images[1]
allImages[2].src=images[2]
for(let i=0;i<allImages.length;i++){
    allImages[i].src=images[i]
}
// allImages.forEach((image,i)=>{
//     image.src=images[i]
// })