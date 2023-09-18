const nav = document.querySelector('.navegacion');

//registrar un evento

nav.addEventListener('mouseout', ()=>{
    console.log('Saliendo');
    nav.style.backgroundColor ='transparent'
})
nav.addEventListener('dblclick', ()=>{
    nav.style.backgroundColor ='white'
    console.log('Entrando')
})


// mousedown - similar a click
// click
//dblclick - dobleclick
//mouseup - cuando sueltas el mouse