class Cliente {
    constructor(nombre,saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} tu saldo: ${this.saldo}`
    }

    static bienvenida(){
        return `Bienbenido al cajero`
    }
}

const juan = new Cliente('Juan',400);
console.log(juan)
console.log(juan.mostrarInformacion());


console.log(Cliente.bienvenida())