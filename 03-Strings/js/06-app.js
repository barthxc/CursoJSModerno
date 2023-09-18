const producto = 'Monitor 20 pulgadas';

// repeat te va a permitir una cadena de texto

const texto = ' en Promoción'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`)

//Split, dividir un String

const actividad = " Estoy aprendiendo JavaScript Moderno"
console.log(actividad.split(" "))

const hobbies = 'Leer, caminar, escuchar música, aprender a programar'
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'));