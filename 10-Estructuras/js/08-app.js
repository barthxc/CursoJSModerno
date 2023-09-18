const autenticado = true;

if (autenticado){
    console.log('El usuario está ausenticado.')
}



const puntos = 500;


function revistarPuntaje(){
if (puntos > 400){
    console.log('Excelente!!!');
    return
}
if (puntos > 300){
    console.log('Buen puntaje..felicidades');
    return
}
}

revistarPuntaje();