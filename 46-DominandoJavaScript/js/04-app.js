//Implicit Binding


const usuario = {
    nombre:'Juan',
    edad:30,
    informacion(){
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    },
    mascota:{
        nombre:'Duke',
        edad:1,
        informacion(){
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
        }
    }
}

usuario.mascota.informacion();