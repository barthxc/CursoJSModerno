//Event Bubbling

const carDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const titulo = document.querySelector('.titulo')

carDiv.addEventListener('click', e=>{
    e.stopPropagation();
    console.log('click en card');
})
infoDiv.addEventListener('click', e=>{
    e.stopPropagation();
    console.log('click en info');
})
titulo.addEventListener('click', e=>{
    e.stopPropagation();
    console.log('click en titulo');
})