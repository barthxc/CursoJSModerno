const dinero = 1000;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;


if (dinero >= totalAPagar){
    console.log('Puedes pagar');
}else if(cheque){
    console.log('Tengo un cheque')
}else if(tarjeta){
    console.log('Pago con tarjeta')
}else{
    console.log('Dinero insuficiente')
}