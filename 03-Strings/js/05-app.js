const producto = 'Monitor 20 pulgadas';

//Reemplazar
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));


// slice para cortar
console.log(producto.slice(0,10));
console.log(producto.slice(8));

//alternativa a slice 
console.log(producto.substring(2,1));


const usuario = 'Pablo'
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));