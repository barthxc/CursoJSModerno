//Class declaration
class Cliente {
    constructor(nombre,saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }
}

const juan = new Cliente('Juan',400);
console.log(juan);







//Class expresion
const Cliente2 = class {
    constructor(nombre,saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }
}

const juan2 = new Cliente2();
console.log(juan2);