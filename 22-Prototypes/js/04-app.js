function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente=function(){
    let tipo;
    if(this.saldo >10000){
       tipo = 'Gold'; 
    }else if(this.saldo > 5000){
        tipo='Platinum';
    }else{
        tipo= 'Normal';
    }
    return tipo;
}


Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre} Saldo: ${this.saldo}$ . Tipo: ${this.tipoCliente()}`
}

Cliente.prototype.retirarSaldo=function(retira){
    this.saldo-=retira;
}



function Persona(nombre,saldo,telefono){
    Cliente.call(this, nombre , saldo); //Heredamos nombre y saldo
    this.telefono=telefono;
}

//HAY QUE CREAR Y COPIAR LAS INSTANCIAS DE PROTOTYPOS CLONADAS Y CONSTRUCTORES Y DESPUÉS CREAR TUS OBJETOS

Persona.prototype=Object.create(Cliente.prototype);  //Le paso todo el prototype de cliente a persona
Persona.prototype.constructor = Cliente; //Hereda el constructor de cliente

const juan = new Persona('Juan', 500, 123123123);

const cliente1 = new Cliente('Pablo',200,);

console.log(cliente1.tipoCliente())

console.log(cliente1.nombreClienteSaldo());

console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono= function(){
    return `El teléfono de ${this.nombre} es ${this.telefono}`
}

console.log(juan.mostrarTelefono())