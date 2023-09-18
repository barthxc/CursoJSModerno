//const navegacion = document.querySelector('.navegacion');

// console.log(navegacion.childNodes); //Los espacios en blanco o saltos de linea son considerados elementos
// console.log(navegacion.children[1].nodeName); //
// console.log(navegacion.children[1].nodeType); //


const card = document.querySelector('.card');
card.children[1].children[1].textContent = 'Nuevo heading desde traversing de dom'
console.log(card.children[1].children[1].textContent);


card.children[0].src = 'img/hacer3.jpg'
console.log(card.children[0]);


//Traversing de DOM . De hijo a padre


console.log(card.parentNode); //Los espacios en blanco o saltos de linea son considerados elementos
console.log(card.parentElement.parentElement.parentElement);


//Traversing de DOM . hermanos

console.log(card.nextElementSibling.nextElementSibling.previousElementSibling);