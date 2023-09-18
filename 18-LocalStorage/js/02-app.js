const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJSON = localStorage.getItem('producto');
console.log(productoJSON);
const producto = JSON.parse(productoJSON);
console.log(producto);
const meses = localStorage.getItem('meses');
console.log(meses);
console.log(JSON.parse(meses));