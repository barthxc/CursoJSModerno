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


// Herencia
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){ //reescribir un método
        return `Bienbenido al cajero de empresas`
    }

}

const juan = new Cliente('Juan',400);

const empresa = new Empresa('Codigo con Juan',500, 1231231,'Aprendizaje en Linea')

console.log(empresa.mostrarInformacion());


console.log(Empresa.bienvenida())