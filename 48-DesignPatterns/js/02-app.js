//Constructor Pattern

class Persona{
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona{
    constructor(nombre,email,empresa){
        super(nombre,email);
        this.empresa = empresa;

    }
}


const persona = new Persona('wey','wawa@com.wes');

const cliente = new Cliente('Pablo','cliente@cliente.com','codigoconbart');

console.log(cliente);
