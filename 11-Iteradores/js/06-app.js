//forEach

const pendientes = ['Tarea', 'Comer','Proyecto', 'Estudiar JavaScript'];

// pendientes.forEach( pendiente =>  console.log(pendiente))

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`)
})








const carrito = [
    {nombre:'Monitor de 27 pulgadas', precio:500},
    {nombre:'Televisión', precio:100},
    {nombre:'Tablet', precio:200, descuento: true},
    {nombre:'Audifonos', precio:300},
    {nombre:'Teclado', precio:400},
    {nombre:'Teléfono', precio:700},
]

carrito.forEach(producto=>console.log(producto.nombre))


const nuevoArray = carrito.map(cosa=>cosa.nombre)

console.log(nuevoArray)