let DB;

document.addEventListener('DOMContentLoaded', ()=>{
    crmBD();

    setTimeout(() => {
        crearCliente();
    }, 5000);

})

function crmBD(){
    //Crear base de datos version 1.0
    let crmBD = window.indexedDB.open('crm',1);

    //Si hay un error
    crmBD.onerror = function(){
        console.log('Hubo un error a la hora de crear la base de datos')
    }

    //Si se creo bien
    crmBD.onsuccess= function(){
        console.log('Base de datos creada!');
        
        DB = crmBD.result;
    }

    //Configuración de la base de datos
    crmBD.onupgradeneeded = function(e){
    //Solo se ejecutará una vez por lo tanto es perfecto para crear tablas/columnas
        const db = e.target.result; //Uso esta variable más corta para hacer referencia de la base de datos.

        //Creo un objectStore para interactuar con la base de datos. le paso 2 parámetros: 1- la base de datos de CRM y le paso un objeto de configuración
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true,
        });

        //Definir las columnas con objectStore
        //El primer parametro es el nombre y el segundo se llama igual es el keypath para referenciar el campo 
        objectStore.createIndex('nombre','nombre',{unique:false});
        objectStore.createIndex('email','email',{unique:true});
        objectStore.createIndex('telefono','telefono',{unique:true});

        console.log('Columnas creadas');

    }
}


function crearCliente(){
    let transaction = DB.transaction(['crm'],'readwrite');

    transaction.oncomplete = function (){
        console.log('Transacción completada');
    }

    transaction.onerror = function (){
        console.log('Hubo un error en la transacción')
    }


    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 123123123,
        nombre: 'Pablo',
        email: 'correo@correo.com'
    }

    const peticion = objectStore.add(nuevoCliente);
    
    console.log(peticion)
}