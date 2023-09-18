window.addEventListener('online',actualizarEstado);
window.addEventListener('offline',actualizarEstado);

function actualizarEstado(){
    if(navigator.onLine){
        console.log('Conexión');
    }else{
        console.log('No conexión');
    }
}

actualizarEstado();