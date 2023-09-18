//Probar 2 valores

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}


let resultado = suma(1, 2);
let esperado = 3;

expected(esperado).toBe(resultado);

resultado = resta(10, 5);
esperado = 5;

expected(esperado).toEqual(resultado);


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
