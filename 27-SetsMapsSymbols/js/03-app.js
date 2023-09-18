//Maps son listas ordenadas con LLAVE y valor

const cliente = new Map();

cliente.set('nombre','Pablo');
cliente.set('tipo','premium');
cliente.set('saldo',300);

console.log(cliente)
console.log(cliente.size);
console.log(cliente.has('nombre'));

console.log(cliente.get('nombre'));


cliente.forEach((info,index)=>{
    console.log(info, index)
})


const paciente = new Map([['nombre','paciente'],['cuarto','no definido']]);

paciente.set('dr','Dr Asignado');
paciente.set('nombre','Antonio');

console.log(paciente);