//Ningún simplo es igual

const sym = Symbol('1');
const sym2 = Symbol('1');

if(sym === sym2){
    console.log('Son iguales');
}else{
    console.log('Son diferentes');
}


const nombre = Symbol();
const apellido = Symbol();

const persona = {};
//Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Juan';
persona[apellido] = 'De la torre';
persona.tipoCliente = 'Premium';
persona.saldo=200;



console.log(persona);
console.log(persona[nombre]);



//Las propiedades que utilizan un symbol no son iterables
for(let i in persona){
    console.log(i);
}


// Definiar una descripción del symbol
const nombreCliente = Symbol('Nombre del Cliente');

const cliente = {};
cliente[nombreCliente] = 'Pedro';
console.log(cliente);