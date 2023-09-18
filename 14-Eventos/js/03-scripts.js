const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', (e)=>{
    if(e.target.value===''){
        console.log('fallo en la validación')
    }
    console.log(e.target.value)
})