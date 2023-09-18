
const api1 = 'https://themealdb.com/api/json/v1/1/lookup.php?i=52772';
const api2 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
const api3 = 'https://www.themealdb.com/api/json/v1/1/categories.php';


const selectCategorias = document.querySelector('#categorias');
const resultado = document.querySelector('#resultado');

let categoria = `
    <option>Prueba</option>
`;

selectCategorias.innerHTML=categoria;