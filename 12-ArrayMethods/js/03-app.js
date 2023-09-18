const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//recude con un forEach

let total = 0;
carrito.forEach(producto=> total += producto.precio);

console.log(`Total a pagar: ${total}`);

//Con un reduce
//El total en este caso será una variable de uso y producto el iterador 
let resultado = carrito.reduce((total, producto)=>total + producto.precio, 0 );

console.log(resultado);
