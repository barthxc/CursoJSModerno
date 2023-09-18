const suma = function (a,b){
    return a+b
}

//Estoy asignando una funcion a una variable como si fuera un rato esto se llama:
//FIRST CLASS FUNCTIONS

const resultado = suma;

console.log(resultado(10,20));

