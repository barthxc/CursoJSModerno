const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id ${id}`);
    }, 
    pausar: function(){
        console.log('pausando...');
    },
    borrar : function(id) {
        console.log(`Borrando canción...${id}`);
    },
    crearPlaylist: function(playlist){
        console.log(`PlayList llamada:'${playlist}'ha sido creada`);
    },
    reproducirPlayList: function(playlist){
        console.log(`Reproduciendo PlayList: ${playlist}`)
    }
    
}

reproductor.reproducir(23);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('años 80');
reproductor.reproducirPlayList('años 80');