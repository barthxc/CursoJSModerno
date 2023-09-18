//Levantar json-server :
//json-server --watch db.json --port 4000
let cliente = {
    mesa:'',
    hora:'',
    pedido:[]
}

const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
}

const btnGuardarCliente=document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente(){
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    //revisar si hay campos vacios
    const camposVacios = [mesa, hora].some(campo=> campo ==='');
    if(camposVacios){
        //Verificar si ya hay una alerta
        const existeAlerta = document.querySelector('.invalid-feedback');
        if(!existeAlerta){
            const alerta = document.createElement('DIV');
            alerta.classList.add('invalid-feedback', 'd-block','text-center');
            alerta.textContent='Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(() => {
                alerta.remove();
            }, 2000);
        }
        return;
    }
    
    cliente = {...cliente, mesa,hora};

    //Ocultar Modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    //Mostrar las secciones
    mostrarSecciones();

    //Obtener platillos de la API json-server
    obtenerPlatillos();

}

function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));

}


function obtenerPlatillos(){
    const url= 'http://localhost:4000/platillos';
    
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarPlatillos(resultado))
}


function mostrarPlatillos(platillos){
    const contenido = document.querySelector('#platillos .contenido');
    platillos.forEach( platillo =>{
        const {id, nombre, precio, categoria} = platillo;

        const row = document.createElement('div');
        row.classList.add('row', 'py-3','border-top');

        const nombreDiv = document.createElement('DIV');
        nombreDiv.classList.add('col-md-4');
        nombreDiv.textContent = nombre;

        const precioDiv = document.createElement('DIV');
        precioDiv.classList.add('col-md-3', 'fw-bold');
        precioDiv.textContent = `$${precio}`;

        const categoriaDiv = document.createElement('DIV');
        categoriaDiv.classList.add('col-md-3');
        categoriaDiv.textContent=categorias[categoria];

        const inputCantidad = document.createElement('INPUT');
        inputCantidad.type='number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id=`producto-${id}`;
        inputCantidad.classList.add('form-control');

        //Funcion que detecta la cantidad y el plato que se está almacenando
        inputCantidad.onchange = function(){
            const cantidad = parseInt(inputCantidad.value);
            agregarPlatillo({...platillo,cantidad});
        };

        const agregar = document.createElement('DIV');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);


        row.appendChild(nombreDiv);
        row.appendChild(precioDiv);
        row.appendChild(categoriaDiv);
        row.appendChild(agregar);

        contenido.appendChild(row);

    })


}

function agregarPlatillo(producto){
     let  {pedido} = cliente;
    //Revisar que la cantidad sea mayor a 0
    if(producto.cantidad>0){
        //Comprueba si el elemento existe en el array
        if(pedido.some(articulo => articulo.id === producto.id )){
            //El Articulo existe, actualizamos la cantidad
            const pedidoActualizado= pedido.map(articulo =>{
                if(articulo.id === producto.id){
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });
            //Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [...pedidoActualizado];      
        }else{
            //El articulo no existe, lo agregamos al array de pedido
            cliente.pedido=[...pedido,producto];
        }
    }else{
        //ELEMINO EL PEDIDO CUANDO LA CANTIDAD SEA 0
        const resultado = pedido.filter( articulo => articulo.id !== producto.id);
        cliente.pedido = resultado;
    }

    //Limpiar HTML
    limpiarHTML();

    if(cliente.pedido.length){    
        //Mostrar resumen
        actualizarResumen();

    }else{
        mensajePedidoVacio();
    }

}

function actualizarResumen(){
    const contenido = document.querySelector('#resumen .contenido');
   
    const resumen=document.createElement('DIV');
    resumen.classList.add('col-md-6','card','py-2','px-3','shadow');
        //MESA
    const mesa = document.createElement('P');
    mesa.textContent='Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    //HORA
    const hora = document.createElement('P');
    hora.textContent='Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    //Agrego al padre
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    //Titulo de la sección
    const heading = document.createElement('H3');
    heading.textContent = 'Platillos consumidos';
    heading.classList.add('my-4','text-center')



   //ITERAR SOBRE AL ARRAY para mostrarlo
    const grupo = document.createElement('UL');
    grupo.classList.add('list-group');

    const {pedido} = cliente;
    pedido.forEach(articulo =>{

        //Nombre articulo
        const {nombre, cantidad, precio, id} = articulo;
        const lista = document.createElement('LI');
        lista.classList.add('list-group-item');
        
        const nombreElemento = document.createElement('H4');
        nombreElemento.classList.add('my-4');
        nombreElemento.textContent=nombre;

        //Cantidad del articulo
        const cantidadElemento = document.createElement('P');
        cantidadElemento.classList.add('fw-bold');
        cantidadElemento.textContent = 'Cantidad: ';

        const cantidadValor = document.createElement('SPAN');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent=cantidad;

        
        //PRECIO del articulo
        const precioElemento = document.createElement('P');
        precioElemento.classList.add('fw-bold');
        precioElemento.textContent = 'Precio: ';

        const precioValor = document.createElement('SPAN');
        precioValor.classList.add('fw-normal');
        precioValor.textContent=`$${precio}`;

        //SUBTOTAL del articulo
        const subtotalElemento = document.createElement('P');
        subtotalElemento.classList.add('fw-bold');
        subtotalElemento.textContent = 'Subtotal: ';

        const subtotalValor = document.createElement('SPAN');
        subtotalValor.classList.add('fw-normal');
        subtotalValor.textContent = calcularSubtotal(precio,cantidad);

        //Boton para eliminar
        const btnEliminar = document.createElement('BUTTON');
        btnEliminar.classList.add('btn','btn-danger');
        btnEliminar.textContent = 'Eliminar del pedido';

        //Funcion para eliminar el pedido
        btnEliminar.onclick = function(){
            eliminarProducto(id);
        }
        

        //Agregar valores a sus contenedores
        cantidadElemento.appendChild(cantidadValor)
        precioElemento.appendChild(precioValor);
        subtotalElemento.appendChild(subtotalValor);


        //Agregar elementos al LI
        lista.appendChild(cantidadElemento);
        lista.appendChild(nombreElemento);
        lista.appendChild(precioElemento);
        lista.appendChild(subtotalElemento);
        lista.appendChild(btnEliminar);


        //Agregar lista al grupo principal
        grupo.appendChild(lista);
    })

    //Agrego al contenido
    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);

    //AGREGO AL DOM
    contenido.appendChild(resumen);

   //Mostrar formulario de propinas
    formularioPropinas();
    }

function limpiarHTML(){
    const contenido = document.querySelector('#resumen .contenido');
    while(contenido.firstChild){
        contenido.removeChild(contenido.firstChild);
    }
}

function calcularSubtotal(precio,cantidad){
    return `$ ${precio*cantidad}`;
}

function eliminarProducto(id){

    const {pedido} = cliente;
    //ELEMINO EL PEDIDO CUANDO LA CANTIDAD SEA 0
    const resultado = pedido.filter( articulo => articulo.id !== id);
    cliente.pedido = resultado;

    //Limpiar HTML
    limpiarHTML();

    if(cliente.pedido.length){    
        //Mostrar resumen
        actualizarResumen();

    }else{
        mensajePedidoVacio();
    }

    //El produco se elimna y reseteamos la cantidad en el formulario
    const productoEliminado = `#producto-${id}`;
    const inputEliminado = document.querySelector(productoEliminado);
    inputEliminado.value = 0;

}

function mensajePedidoVacio(){
    const contenido = document.querySelector('#resumen .contenido');
    const texto = document.createElement('P');
    texto.classList.add('text-center')
    texto.textContent = 'Añade los elementos del pedido';

    contenido.appendChild(texto);
}

function formularioPropinas(){
    const contenido = document.querySelector('#resumen .contenido');
    const formulario = document.createElement('DIV');
    formulario.classList.add('col-md-6','formulario');

    const divFormulario = document.createElement('DIV');
    divFormulario.classList.add('card','py-2','px-3','shadow')

    const heading = document.createElement('H3');
    heading.classList.add('my-4','text-center');
    heading.textContent='Propina';

    //Radio buttons de 10%

    const radio10=document.createElement('INPUT');
    radio10.type='radio';
    radio10.name ='propina';
    radio10.value='10';
    radio10.classList.add('form-check-input');

    const radio10Label=document.createElement('LABEL');
    radio10Label.textContent='10%';
    radio10Label.classList.add('form-check-label');
    radio10.onclick = calcularPropina;

    const radio10Div=document.createElement('DIV');
    radio10Div.classList.add('form-check');

    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);


    //Radio buttons de 25%

    const radio25=document.createElement('INPUT');
    radio25.type='radio';
    radio25.name ='propina';
    radio25.value='25';
    radio25.classList.add('form-check-input');
    radio25.onclick = calcularPropina;

    const radio25Label=document.createElement('LABEL');
    radio25Label.textContent='25%';
    radio25Label.classList.add('form-check-label');

    const radio25Div=document.createElement('DIV');
    radio25Div.classList.add('form-check');

    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25Label);

    //Radio buttons de 50%

    const radio50=document.createElement('INPUT');
    radio50.type='radio';
    radio50.name ='propina';
    radio50.value='50';
    radio50.classList.add('form-check-input');
    radio50.onclick = calcularPropina;


    const radio50Label=document.createElement('LABEL');
    radio50Label.textContent='50%';
    radio50Label.classList.add('form-check-label');

    const radio50Div=document.createElement('DIV');
    radio50Div.classList.add('form-check');


    radio50Div.appendChild(radio50);
    radio50Div.appendChild(radio50Label);





    //Agregar al div principal
    divFormulario.appendChild(heading);
    divFormulario.appendChild(radio10Div);
    divFormulario.appendChild(radio25Div);
    divFormulario.appendChild(radio50Div);
    formulario.appendChild(divFormulario);

    //agregar al DOM
    contenido.append(formulario);
}

function calcularPropina(){
    const {pedido} = cliente;
    let subtotal= 0;

    //Subtotal
    pedido.forEach(articulo =>{
        subtotal+=articulo.cantidad*articulo.precio;
    });

    //Selecciono el radiobutton correcto
    const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value;

    //Calcular propina
    const propina = ((subtotal*parseInt(propinaSeleccionada))/100);


    //Calcular total
    const total = subtotal + propina;


    mostrarTotalHTML(subtotal, total, propina);
}

function mostrarTotalHTML(subtotal, total, propina){
    const divTotales =  document.createElement('DIV');
    divTotales.classList.add('total-pagar','my-5');

    //subtotal
    const subtotalParrafo = document.createElement('P');
    subtotalParrafo.classList.add('fs-4','fw-bold','mt-2');
    subtotalParrafo.textContent = 'Subtotal Consumo:';
    
    const subtotalSpan = document.createElement('SPAN');
    subtotalSpan.classList.add('fw-normal');
    subtotalSpan.textContent = `$${subtotal}`;

    subtotalParrafo.appendChild(subtotalSpan);


    //Propina
    const propinaParrafo = document.createElement('P');
    propinaParrafo.classList.add('fs-4','fw-bold','mt-2');
    propinaParrafo.textContent = 'Propina:';
    
    const propinaSpan = document.createElement('SPAN');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `$${propina}`;

    propinaParrafo.appendChild(propinaSpan);

    //Total
    const totalParrafo = document.createElement('P');
    totalParrafo.classList.add('fs-4','fw-bold','mt-2');
    totalParrafo.textContent = 'Total:';
    
    const totalSpan = document.createElement('SPAN');
    totalSpan.classList.add('fw-normal');
    totalSpan.textContent = `$${total}`;

    totalParrafo.appendChild(totalSpan);

    //Eliminar el ultimo resultado
    const totalPagarDiv = document.querySelector('.total-pagar');
    
    if(totalPagarDiv){
        totalPagarDiv.remove();
    }


    divTotales.appendChild(subtotalParrafo)
    divTotales.appendChild(propinaParrafo)
    divTotales.appendChild(totalParrafo)
    
    const formulario = document.querySelector('.formulario > div');
    formulario.appendChild(divTotales);


}