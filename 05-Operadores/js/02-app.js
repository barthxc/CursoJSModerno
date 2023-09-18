const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Si 2 números son iguales
console.log(numero1 == numero3)
console.log(numero1 == numero2) //Compara en el valor, no es muy estricto
console.log(numero1 === numero2)//Comparador estricto
console.log(numero1 === parseInt(numero2)) //Compara en el valor, no es muy estricto


//Diferente

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2) //True
console.log(numero1 != numero2) //false
console.log(numero1 !== numero2) //Comparador de "diferente" estricto  - TRUE