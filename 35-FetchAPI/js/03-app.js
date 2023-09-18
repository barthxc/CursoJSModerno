

const buttonCargarArray = document.querySelector('#cargarJSONArray');
const contenido = document.querySelector('.contenido');

buttonCargarArray.addEventListener('click', obtenerDatos);



function obtenerDatos(){
    const url = 'data/empleados.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado))
}       

function mostrarHTML(empleados){
    let html = '';

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo } = empleado;
        
        html+=`
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        `;
    
        contenido.innerHTML = html;
  
    });

}