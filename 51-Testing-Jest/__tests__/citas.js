import Citas from '../js/classes/Citas';

describe('Probar la clase de Citas', ()=>{

    const citas = new Citas();

    const id = Date.now()
    test('Agregar una nueva cita',()=>{



        const citaObj = {
            id,
            mascota: 'Duke',
            propietario: 'Pablo',
            telefono: '123123',
            fecha: '23-02-1996',
            hora:'14:00',
            sintomas: 'Se murió'
        }

        citas.agregarCita(citaObj);

        //PRUEBA
        expect(citas).toMatchSnapshot();
    });


    test('Actualizar cita', ()=>{
        const citaActualizada = {
            id,
            mascota: 'Nebula',
            propietario: 'Pablo',
            telefono: '123123',
            fecha: '23-02-1996',
            hora:'14:00',
            sintomas: 'Se murió'
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });


    test('Eliminar cita', ()=>{
        citas.eliminarCita(id);
        expect(citas).toMatchSnapshot();
    })
})