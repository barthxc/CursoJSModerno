const pendientes = ['Tarea', 'Comer','Proyecto', 'Estudiar JavaScript'];


const carrito = [
    {nombre:'Monitor de 27 pulgadas', precio:500},
    {nombre:'Televisión', precio:100},
    {nombre:'Tablet', precio:200, descuento: true},
    {nombre:'Audifonos', precio:300},
    {nombre:'Teclado', precio:400},
    {nombre:'Teléfono', precio:700},
]


for(let pendiente of pendientes){
    console.log(pendiente);
}

console.log('SEPARACION');


for(let producto of carrito){
    console.log(producto.nombre);
}