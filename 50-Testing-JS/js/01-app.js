//Probar 2 valores

function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a-b;
}

let resultado = suma(2,2);

let esperado = 3;

if (resultado !== esperado){
    console.error('El resultado es diferente y no ha pasado');
}else{
    console.log('Prueba correcta');
}


