const carrito = [];

//Definir un producto

const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400,
}

const producto2 = {
    nombre: 'Teléfono',
    precio: 800,
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50,
}


let resultado;

resultado = [...carrito, producto]; //Forma declarativa
resultado = [...resultado, producto2]; //Copia de resultado y añado producto2 
resultado = [producto3, ...resultado]; //El producto al principio

console.table(resultado);







console.table(carrito);