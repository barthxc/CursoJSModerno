//Los sets son importantes pero no se llegan a usar mucho por parte de los desarrolladores. 
//Son mas rápido iterar con ellos y son como los diccionarios. Ya que los valores no deben repetirse

//Lista de valores SIN duplicados

const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('camisa');


console.log(carrito);
console.log(carrito.size);
console.log(carrito.has('camisa'));
carrito.delete('Disco #3'); //Me devuelve TRUE si se ha eliminado

carrito.forEach( (producto,index) =>{
    console.log(producto);   //Los index serán los mismo valores. No tiene index
}) 

console.log(carrito)

// Del siguiente arreglo, eliminar los duplicados

const numeros = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);

const listaNueva = [...noDuplicados];
console.log(listaNueva);

listaNueva.forEach ((cosa, index)=>{
    console.log(cosa, index)
})