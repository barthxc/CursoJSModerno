// Mixin Pattern

class Persona{
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
    }
}



const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`);
    },
    otraFuncion(){
        console.log('joder esta es otra función!')
    }
}

//Añadir funcion persona a la clase de persona
Object.assign(Persona.prototype, funcionesPersona);


const cliente = new Persona('Pablo','pablo@pablo.com');

cliente.mostrarInformacion();
cliente.otraFuncion();

