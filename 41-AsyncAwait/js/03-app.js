function descargarClientes(){
    return new Promise((resolve, reject)=>{
        const error = false;
        setTimeout(() => {
            if(!error){
                resolve('El listado de clientes se descargó correctamente');
            }else{
                reject('Error en la conexión')
            }
        }, 3000);
    })
}

//Async await       ESTA ES LA FUNCIÓN PADRE. después del =  es una función anonima asincrona
const ejecutar = async () =>{
    try{
       const respuesta =  await descargarClientes();
       console.log(2+2);
       console.log(respuesta);
    }catch(error){
        console.log(error)
    }
}

ejecutar();