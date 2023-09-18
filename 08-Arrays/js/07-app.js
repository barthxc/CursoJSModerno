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

const producto4 = {
    nombre: 'Teclado',
    precio: 50,
}





carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);

carrito.unshift(producto); //Agrega el dato e la primera posición del array






console.table(carrito);

// //Eliminar ultimo elemento de un arreglo
// carrito.pop();
// console.table(carrito);


// //Eliminar el primer elemento
// carrito.shift();
// console.table(carrito);

carrito.splice(2,1); //Primer valor es la posición que elijes y el segundo valor es la cantidad de elementos que eliminas
console.table(carrito);

