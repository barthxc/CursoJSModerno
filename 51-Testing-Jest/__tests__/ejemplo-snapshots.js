const cliente = {
    nombre:'Pablo 2',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing al cliente', ()=>{
    test('Es Pablo', () =>{
        expect(cliente).toMatchSnapshot();
    })
})

// npm t -- -u para actualizar tu objeto o eliminar un snapshot para crear lo de nuevo usando : npm t