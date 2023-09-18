const suma =  (a,b) => a+b;
const multiplicar =  (a,b) => a*b;

const sumarOMultiplicar = fn => fn(10,20);

//FUNCION COMO ARGUMENTO
console.log(sumarOMultiplicar(suma));
console.log(sumarOMultiplicar(multiplicar));
