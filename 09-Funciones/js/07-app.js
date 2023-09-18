iniciarApp();

function iniciarApp(){
    console.log('Iniciando app...')
    segundaFuncion();
    obtenerNombreYsaludar();
}


function segundaFuncion(){
    console.log('Desde la segunda funcion')
    usuarioAutenticado('Pablo');
}


function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere...')
    console.log(`Usuario autenticado exitosamente ${usuario}`)
}














function pedirNombre(){
    nombre = prompt('¿Cómo te llamas?');
    return nombre
}



function saludar(nombre = 'Desconocido'){
    alert(`Hola ${nombre}`);
}




function obtenerNombreYsaludar() {
    const nombre = pedirNombre();
    saludar(nombre);
}