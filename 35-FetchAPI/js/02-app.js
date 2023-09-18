const buttonCargarJson = document.querySelector('#cargarJSON');
const contenido = document.querySelector('.contenido');

buttonCargarJson.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = "data/empleado.json"
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado))
}

function mostrarHTML({nombre, id, empresa, trabajo}){
    //const parrafo = document.createElement('P');

    contenido.innerHTML=`
    <p>Empleado: ${nombre}</p>
    <p>ID: ${id}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    `;
    


}