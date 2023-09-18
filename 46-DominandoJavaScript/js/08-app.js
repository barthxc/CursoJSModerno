self.onload= () =>{
    console.log('Ventana lista');
}

window.nombre = 'Monitor 20 pulgadas'

const producto = {
    nombre:'Monitor',
    precio:30,
    disponible:true,
    mostrarInfo: function(){
        return `El producto: ${self.nombre}`
    }
}
console.log(producto.mostrarInfo());