//Probar 2 valores

function suma(a, b) {
    return a + b;
  }
  
  function resta(a, b) {
    return a - b;
  }
  
  async function sumaAsync(a, b) {
    return Promise.resolve(suma(a, b));
  }
  
  let resultado = suma(1, 2);
  let esperado = 3;
  
  expected(esperado).toBe(resultado);
  
  resultado = resta(10, 5);
  esperado = 5;
  
  
  expected(esperado).toBe(resultado);
  expected(esperado).toEqual(resultado);
  
  test('Suma 10+20 y el resultado debe ser 30', async ()=>{
      const resultado = await sumaAsync(10,20);
      const esperado = 30;
      expected(esperado).toBe(resultado);
  })
  
  async function test(mensaje,callback){
      try{
          await callback();
          console.log('El test se ejecutó correctamente');
          console.log(mensaje);
      }catch(error){
          console.error(error);
      }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  function expected(esperado) {
    return {
      toBe(resultado) {
        if (resultado !== esperado) {
          console.error("El resultado es diferente y no ha pasado");
        } else {
          console.log("Prueba correcta");
        }
      },
      toEqual(resultado) {
        if (resultado !== esperado) {
          console.error("El resultado es diferente y no ha pasado");
        } else {
          console.log("Prueba correcta");
        }
      },
    };
  }
  