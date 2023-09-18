const producto = {
    nombre: 'Monitor',
    precio: 300, 
    disponible: true,
}

//Esta es la forma anterior de hacerlo. Ahora se usa OBJECT DESTRUCTURING 
const {nombre} = producto;
console.log(nombre);



//Destructuring en Arrays

const numeros = [10,20,30,40,50];

const [prime, segun, ...terce] = numeros; //guarda en la variable prime y segun. y además copia en terce el restante del array
const [primero] = numeros;
const [/*primer valor*/,/*segundo valor*/,tercero] = numeros;

console.log(primero);
console.log(tercero);
