const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText); // si el texto estuviera invisible por CSS visibility: hidden; no encontraría el texto
console.log(encabezado.textContent); // si lo va a encontrar
console.log(encabezado.innerHTML); //se trae el HTML

const nuevoHeading = 'Nuevo heading bro'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';

