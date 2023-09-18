//Cuando se instala el SW
self.addEventListener('install',e => {
    console.log('Instalado el Service Worker');
    console.log(e);
});


//Activar SW

self.addEventListener('activate', e=>{
    console.log('SW Activado');
    console.log(e);

});

//Evento fetch para descargar archvios estáticos

self.addEventListener('fetch', e =>{
    
    console.log('Fetch...', e);
})