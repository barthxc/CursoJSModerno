//OBJETO DENTRO DE OTRO OBJETO
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


console.log(producto)
console.log(producto.informacion)
console.log(producto.informacion.peso)
console.log(producto.informacion.medida)
