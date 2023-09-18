//OBJECT DESTRUCTURING DE OBJETOS ANIDADOS
const producto = {
    nombre: 'Monitor',
    precio: 300, 
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m',
        },
        fabricacion: {
            pais:'china',
        }

    }
}

const {nombre, informacion: {fabricacion }} = producto;

console.log(nombre)

console.log(fabricacion)
