// Variables 
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


//Event Listeners
eventListeners();

function eventListeners(){
    //Cuando el usuarioa grega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];


        crearHTML();

    });
}




//Funciones

function agregarTweet(e){
    e.preventDefault();
    
    //Textarea donde el usuario escribe

    const tweet = document.querySelector('#tweet').value;
    if(tweet.trim() === ''){
        mostrarError('Un mensaje no puede ir vacio');
        return; //evita que se ejecute mas lineas de código (este return funciona siempre y cuando esté en una función)
    }

    const tweetObj={
        id: Date.now(),
        tweet                //Esto es iguala esto tweet : tweet
    }
    //Añadir al arreglo de tweets;
    tweets =[...tweets, tweetObj];

    //Crear HTML
    crearHTML()

    //reiniciar el formulario 
    formulario.reset();
}


//Mostrar mensaje de error

function mostrarError(error){
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertar en el contenido

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina el mensaje después de un segundo == 1000 ms
    setTimeout(()=>{
        mensajeError.remove();
    }, 1000);
}


//Muestra un listado de los tweets

function crearHTML(){

    limpiarHTML();

    if(tweets.length>0){
        tweets.forEach( tweet =>{

            //Agregar un botón de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText='X';

            //Añadir la funcion de eliminar
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            }



            //Crear el HTML
            const li = document.createElement('LI');

            //Añadir el texto
            li.innerText = tweet.tweet;

            //Asignar el botón
            li.appendChild(btnEliminar);
            
            //Insertarlo en el html 
            listaTweets.appendChild(li);
        });
    }

    sincronizarStogare();
}

//Agrega los tweet actuales al localStorage
function sincronizarStogare(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}


//Elimina un tweet
function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML();
}

//Limpiar el HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}