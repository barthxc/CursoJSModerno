const producto = {
    nombre: 'Monitor',
    precio: 300, 
    disponible: true,
}

//Agregar una propiedad nueva a mi objeto

producto.imagen = "imagen.jpg";

//Eliminar una propiedad de mi objeto

delete producto.disponible;

console.log(producto)