function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo= saldo;
}

Cliente.prototype.tipoCliente = function(){
    console.log('Desde mi nuevo proto')
}


//Instanciar
const pedro = new Cliente('Pedro',500);

pedro.tipoCliente();