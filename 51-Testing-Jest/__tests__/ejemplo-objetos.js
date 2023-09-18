const cliente = {
    nombre:'Pablo',
    balance: 500
}

describe('Testing al cliente', () => {
    test('El cliente es premiun?', ()=>{
        expect(cliente.balance).toBeGreaterThan(400);
    })

    test('Es Pablo?', ()=>{
        expect(cliente.nombre).toBe('Pablo');
    })

    test('No es otro cliente', ()=>{
        expect(cliente.nombre).not.toBe('Gilipollas');
    })

    test('No tiene 500', ()=>{
        expect(cliente.balance).not.toBe(501);
    })


})