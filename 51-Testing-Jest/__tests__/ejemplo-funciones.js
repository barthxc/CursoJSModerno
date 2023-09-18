function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a-b;
}

describe('Testing funciones suma/resta', ()=>{
    test('Suma de 20 y 30', ()=>{
        expect(suma(20,30)).toBe(50);
    });

    test('Resta de 20 y 30', ()=>{
        expect(resta(10,5)).toBe(5);
    });

    test('Suma 10 y 10 no sea 10', ()=>{
        expect(suma(10,10)).not.toBe(10);
    });

    test('Resta no sea 2', ()=>{
        expect(resta(10,5)).not.toBe(2);
    });


});