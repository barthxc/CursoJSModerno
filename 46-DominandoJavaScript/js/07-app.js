console.log('Primero');


setTimeout(() => {
    console.log('Segundo');
    
}, 0);

console.log('Tercero');


setTimeout(() => {
    console.log('Cuardo');
    
}, 0);


new Promise(function(resolve){
    resolve('Desconocido...')
}).then(console.log)

console.log('Ultimo')

function hola(){
    console.log('hola');
}
hola();