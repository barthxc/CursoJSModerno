//Namespace Pattern

const restaurantApp = {

};

restaurantApp.platillos = [
    {
        platillo:'Pizza',
        precio:25
    },
    {
        platillo:'Burguer',
        precio:20
    },
    {
        platillo:'Salshicha',
        precio:20
    },
];

restaurantApp.funciones ={
    mostrarMenu: (platillos) =>{
        console.log('Bienvenidos a nuestro menú');
        platillos.forEach((plato, index) => {
            console.log(plato.platillo, plato.precio)
        });
    }

}

const {platillos} = restaurantApp;

restaurantApp.funciones.mostrarMenu(platillos);