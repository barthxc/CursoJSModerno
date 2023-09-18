const usuario = true;
const puedePagar = true;

if (usuario && puedePagar){
    console.log('Eres usuario y puedes pagar');
}else if(!usuario){
    console.log('No eres usuario bro');
}else if(!puedePagar){
    console.log('No tienes money bro')
} else {
    console.log('No puedes comprar')
}