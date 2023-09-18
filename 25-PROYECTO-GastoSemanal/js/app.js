// Variables y selectoer

formulario = document.querySelector('#agregar-gasto');
gastoListado = document.querySelector('#gastos');


//Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto)
    formulario.addEventListener('submit', agregarGasto);
}





//Clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();      
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto)=>total  + gasto.cantidad, 0);
        console.log(gastado)
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }


}



class UI{

    insertarPresupuesto(cantidad){
        //Extrayendo valor
        const{presupuesto, restante } = cantidad;

        //Agregar el HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo ){
        // Crear el div

        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Insertamos en el HTML
        document.querySelector('.primario').insertBefore(divMensaje,formulario);
        setTimeout(() => {
           divMensaje.remove(); 
        }, 2000);
    }

    mostrarGastos(gastos){

        this.limpiarHTML();

        //Iterar sobre los gastos
        gastos.forEach( gasto =>{

            const {cantidad , nombre, id} = gasto;

            // Crear un LI
            const nuevoGasto = document.createElement('LI');
            nuevoGasto.className= 'list-group-item d-flex justify-content-vetween align-items-center';
            nuevoGasto.setAttribute('data-id', id);
            //nuevoGasto.dataset.id = id; //Es el mismo resultado que el setAttribute


            //Agregar el HTML
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`;


            //Boton para borrar
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;';
            btnBorrar.onclick = () =>{
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            //Agregar AL HTML
            gastoListado.appendChild(nuevoGasto);

        })
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const{presupuesto, restante}= presupuestoObj;
        const restanteDiv = document.querySelector('.restante');

        //Comprobar 25%
        if((presupuesto) /4 > restante){
            restanteDiv.classList.remove('alert-succes', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        }else if((presupuesto/2)> restante){
            restanteDiv.classList.remove('alert-succes');
            restanteDiv.classList.add('alert-warning');
        }else{
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-succes');
        }

        //Si el total es 0 o menor
        if(restante <= 0 ){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }

}

// Instanciar
const ui = new UI();
let presupuesto;


//Funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?')
    

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }
    presupuesto = new Presupuesto(presupuestoUsuario);
   

    ui.insertarPresupuesto(presupuesto);
    
}


//Añade gasto

function agregarGasto(e){
    e.preventDefault();
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    if (nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }

    //Generar un objeto con el casto - ESTO ES LO CONTRARIO A UN DISTRUCTURING  
    const gasto = {nombre,cantidad, id: Date.now()}

    //Añade un nuevo gasto   
    presupuesto.nuevoGasto(gasto);

    //Alerta correcta
    ui.imprimirAlerta('Gasto agregado correctamente');

    //Imprimir los gastos
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    //Reinicia el formulario
    formulario.reset();
}


function eliminarGasto(id){

    //Elimina los gastos del objeto
    presupuesto.eliminarGasto(id);

    //Eliminar los gastos del HTML
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
}