const producto = {
    nombre: 'Monitor',
    precio: 300, 
    disponible: true,
}

//Esta es la forma anterior de hacerlo. Ahora se usa OBJECT DESTRUCTURING 
const nombrecito = producto.nombre;
console.log(nombrecito);

const {nombre} = producto;
const {precio } = producto;
console.log(nombre);
console.log(precio);
