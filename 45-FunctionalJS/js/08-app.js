//Closures sacar una función de dentro de una función o de dentro

const obtenerCliente = () =>{
    const nombre = 'Juan';
    
    function muestraNombre(){
        console.log(nombre);
    }
    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();

