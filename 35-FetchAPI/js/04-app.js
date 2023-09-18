const cargarApiBtn=document.querySelector('#cargarAPI');

cargarApiBtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado))
        .catch(error => console.log('Algo ha salido mal: ' + error))
}


function mostrarHTML(datos){
    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach(perfil => {
        const {author,post_url} = perfil;
        html += `
        <p> Autor> ${author}</p>
        <a href="${post_url}" target="_black">Ver Imagen</a>
        `
    });
    contenido.innerHTML = html;
}