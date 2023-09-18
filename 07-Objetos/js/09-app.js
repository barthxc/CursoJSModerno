"use strict"; //?????


const producto = {
    nombre: 'Monitor',
    precio: 300, 
    disponible: true,
}

Object.seal(producto);  //Sellar el objeto: se puede modificar pero no agregar ni eliminar

producto.disponible = false;

console.log(producto);

console.log(Object.isFrozen(producto)); // NO ESTÁ CONGELADO PERO SI ESTÁ SELLADO
console.log(Object.isSealed(producto));