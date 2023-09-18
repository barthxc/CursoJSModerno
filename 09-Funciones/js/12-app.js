const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio:500},
    {nombre: 'Televisión', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Audifonos', precio:300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},
]


console.log("--------Espacio------");


carrito.forEach( producto => {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
}
);

console.log("--------Espacio------");

//MAP crea un array nuevo 
const nuevoArray = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`)

console.log(nuevoArray)