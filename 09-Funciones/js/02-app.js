// Declaracion de Funcion (Function Declaration)
// La funcion declarativa puede ejecutarse aunque la llames antes de su creación. La expresión no 
sumar();
function sumar(){
    console.log(2+2);
}

//HOISTING o algo así.

// Expresion de Funcion (Function Expression)
// La expresión de la funcion no se puede ejecutar antes de ser creada.
const sumar2 = function (){
    console.log(3+3);
}

sumar2();

