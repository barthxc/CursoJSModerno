// for (let i = 0;i <=100; i++) {
//     if(i === 5){
//         console.log('CINCO');
//         continue;  //continua el bucle, PERO MOSTRARÁ EN EL NUMERO 5 EL CONSOLE LOG DE ABAJO
//     }
//     console.log(`Número: ${i}`)
// }






const carrito = [
    {nombre:'Monitor de 27 pulgadas', precio:500},
    {nombre:'Televisión', precio:100},
    {nombre:'Tablet', precio:200, descuento: true},
    {nombre:'Audifonos', precio:300},
    {nombre:'Teclado', precio:400},
    {nombre:'Teléfono', precio:700},
]


for(let i=0; i < carrito.length ; i++){
    if(carrito[i].descuento){
        console.log(`El articulo tiene ${carrito[i].nombre} descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}