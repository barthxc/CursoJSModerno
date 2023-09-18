const cliente = {
    nombre:'Juan',
    saldo:500
}

console.log(cliente.nombre);
console.log(cliente.saldo);




function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo= saldo;
}

const juan = new Cliente('Juan',500);

console.log(juan.saldo)