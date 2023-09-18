const producto = {
    nombre: 'Monitor',
    precio: 300, 
    disponible: true,
}



const medidas = {
    peso: '1gk',
    medidas: '1m'
}

console.log(producto)
console.log(medidas)

//Unir 2 objetos
        //forma 1
const resultado = Object.assign(producto, medidas);

        //forma 2 Spread Operator o Rest Operator
const resultado2 = {...producto, ...medidas}

console.log(resultado)
console.log(resultado2)