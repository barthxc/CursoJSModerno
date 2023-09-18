//Partials y Currying

const suma = (a,b,c) => a+b+c;



const parcial = a  => (b,c) => suma(a,b,c);

const primerNumero =parcial(5);
const resultado = primerNumero(3,5);

console.log(resultado); 


console.log(suma(1,2,3));

