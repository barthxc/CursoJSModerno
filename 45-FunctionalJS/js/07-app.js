//Es una funcion que retorna otra funcion
const obtenerCliente = () => () => console.log('Pablo');
const fn = obtenerCliente();

fn();

