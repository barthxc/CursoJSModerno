//composition

const obtenerNombre = info=>({
        mostrarNombre(){
            console.log(info.nombre);
        }
})


function Cliente(nombre,email,empresa){
    let info={
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info)
    )
}


function Empleado(nombre,email,puesto){
    let info={
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info)
    )
}




const cliente = Cliente('Pablo','correo1','Empresota');
cliente.mostrarNombre();
const empleado = Cliente('Pablito','correo2','puestote');
empleado.mostrarNombre();