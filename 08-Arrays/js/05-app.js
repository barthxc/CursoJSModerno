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

carrito.push(producto2);
carrito.push(producto);

carrito.unshift(producto3); //Agrega el dato e la primera posición del array






console.table(carrito);