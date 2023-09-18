localStorage.removeItem('nombre');

console.log(localStorage);

//ACTUALIZAR UN REGISTRO EN LOCALSTORAGE

const mesesArray = JSON.parse(localStorage.getItem('meses'));

console.log(mesesArray);

mesesArray.push('Nuevo mes')

console.log(mesesArray);

localStorage.setItem('meses', JSON.stringify(mesesArray));

console.log(localStorage);


localStorage.clear();

console.log(localStorage);