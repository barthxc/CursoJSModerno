const producto = {
    nombre: 'Monitor',
    precio: 300, 
    disponible: true,
    mostrarInfo: function (){
        console.log(`EL producto ${this.precio} tiene un precio de: ${this.precio}`)
    }
}

producto.mostrarInfo();