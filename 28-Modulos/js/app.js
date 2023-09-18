import nuevaFuncion, { nombreCliente, ahorro, mostrarInformación, tieneSaldo, Cliente as manzana} from "./cliente.js";
import { Empresa} from "./empresa.js";

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformación(nombreCliente, ahorro))

tieneSaldo(ahorro);

const cliente = new manzana (nombreCliente,ahorro);

console.log(cliente.mostrarInformacion());


//Importar empresa


const empresita = new Empresa('Pablo', 100, 'Empresota');
console.log(empresita.mostrarInformacion());

nuevaFuncion()