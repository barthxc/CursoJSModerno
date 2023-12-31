import Citas from './classes/citas.js'
import UI from './classes/ui.js';

import {mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput,
    formulario} from './selectores.js'

const ui = new UI();
const administrarCitas = new Citas();

let editando;

//Objeto con la inf de la cita
const citaObj ={
    mascota:'',
    propietario:'',
    telefono:'',
    hora:'',
    sintomas:''
}

//Agrega datos al objeto de cita
export function datosCita(e){
    citaObj[e.target.name] = e.target.value;
}

//Valida y agrega una nueva cita a la clase de citas
export function nuevaCita(e){
    e.preventDefault();

    //Extraer la información del objeto de cita
    const {mascota, propietario, telefono, hora, sintomas} = citaObj;

    //Validar 

    if(mascota === '' || propietario === '' || telefono ==='' || hora === '' || sintomas ===''){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error')
        return;
    }

    if(editando){
        ui.imprimirAlerta('Editado correctamente');

        //Pasar el objeto de la cita a modo edición
        administrarCitas.editarCita({...citaObj})

        //regresar el texto del botón a su estado original
        formulario.querySelector('button[type="submit"]').textContent='Crear cita';

        //Quitar modo edición
        editando=false;
    }else{
        //Generar un id único
        citaObj.id = Date.now();

         //Creando una nueva cita
         administrarCitas.agregarCita({...citaObj});

         //Mensaje de agregado
         ui.imprimirAlerta('Se agregó correctamente');
    }

    
    //Reiniciar el objeto y el formulario
    reiniciarObjeto();
    formulario.reset();

    //Mostrar el HTML
    ui.imprimirCitas(administrarCitas);

}



//Funciones
export function reiniciarObjeto(){
   citaObj.mascota = '';
   citaObj.propietario = '';
   citaObj.telefono = '';
   citaObj.fecha = '';
   citaObj.hora = '';
   citaObj.sintomas = '';
}

export function eliminarCita(id){
    //Eliminar cita
    administrarCitas.eliminarCita(id);

    //Muestre un mensaje
    ui.imprimirAlerta('La cita se eliminó correctamente');

    //Refrescar cita
    ui.imprimirCitas(administrarCitas);
}

//carga los datos y el modo edición
export function cargarEdicion(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    //Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //Llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    //Cambiar el texto del bottón
    formulario.querySelector('button[type="submit"]').textContent='Guardar Cambios';

    editando = true;
}