const reproductor = {
    cancion:'',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`), 
    pausar: () => console.log('pausando...'),
    borrar : id => console.log(`Borrando canción...${id}`),
    crearPlaylist: playlist =>console.log(`PlayList llamada:'${playlist}'ha sido creada`),
    reproducirPlayList: playlist => console.log(`Reproduciendo PlayList: ${playlist}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },

    get obtenerCancion(){
        console.log(`Obteniendo ${this.cancion}`)
        return this.cancion;
    }

}

reproductor.nuevaCancion = 'Enter Sandman'
reproductor.obtenerCancion;


reproductor.reproducir(23);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('años 80');
reproductor.reproducirPlayList('años 80');