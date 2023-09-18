import {eliminarCita, cargarEdicion} from '../funciones.js';
import {contenedorCitas} from '../selectores.js';

class UI{
  
    imprimirAlerta(mensaje,tipo){
        //Crear el div
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center','alert','d-block', 'col-12');


        //Agregar clase por el tipo de mensaje
        if(tipo ==='error'){
        divMensaje.classList.add('alert-danger');
        }else{
        divMensaje.classList.add('alert-success');
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje,document.querySelector('.agregar-cita'));

        //Quitar la alerta después de X segundos

        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }

        //Mostrar el HTML de las citas. Distructuring dentro del parámetro de la función. Accediendo al objeto del arreglo.
    imprimirCitas({citas}){
        
        this.limpiarHTML();

        citas.forEach( cita =>{
            const {mascota, propietario, telefono,fecha, hora, sintomas, id} = cita;

            const divCita = document.createElement('DIV');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id= id;

            //Scripting de los elemento de la cita
            const mascotaParrafo = document.createElement('H2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;


            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML=`
                <span class="font-weight-bolder">Propietario:</span> ${propietario}`

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML=`
                <span class="font-weight-bolder">Teléfono:</span> ${telefono}`

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML=`
                <span class="font-weight-bolder">Fecha:</span> ${fecha}`

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML=`
                <span class="font-weight-bolder">Hora:</span> ${hora}`

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML=`
                <span class="font-weight-bolder">Sintomas:</span> ${sintomas}`

            //Boton para eliminar cita
            const btnElmininar = document.createElement('button');
            btnElmininar.classList.add('btn','btn-danger','mr-2');
            btnElmininar.innerHTML='Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
            btnElmininar.onclick = () => eliminarCita(id);

            //Boton par editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn','btn-info');
            btnEditar.innerHTML='Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>'
            btnEditar.onclick = () => cargarEdicion(cita);

            //Agregar los parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnElmininar);
            divCita.appendChild(btnEditar);

            //Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);
        })
    }

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

export default UI;