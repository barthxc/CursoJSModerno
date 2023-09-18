const aplicarDescuento = new Promise((resolve, reject)=>{
    const descuento = true;

    if(descuento){
        resolve('Descuento aplicado');
    }else{
        reject('No se pudo aplicar el descuento');
    }
} )


aplicarDescuento
    .then(resultado =>{
        console.log(resultado)
    })
    .catch(error=>{
        console.log(error);
    })


//Hay 3 valores posibles en una promesa :

// fulfilled - El promise de cumplio {resolve}
// rejected - El promise no se cumplió
// pending - no sabe si se va acumplir o no . No se ha declarado el promise