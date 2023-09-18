"use strict"; //?????

// gracias a use strict se llama object methods

const producto = {
    nombre: 'Monitor',
    precio: 300, 
    disponible: true,
}

Object.freeze(producto); // Congelas el objeto el cual no se le asignan cambios. Ni agregar / modificar ni eliminar

// producto.disponible = false;
// producto.imagen = 'imagen.jpg';

console.log(producto);

console.log(Object.isFrozen(producto))