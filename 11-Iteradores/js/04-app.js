let i = 0; //Inicializar while

while(i<100){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`Número ${i} : Fizz Buzz`)
    }else if(i %3 ===0){
        console.log(`Número ${i}: Fizz`)
    }else if(i % 5 ===0){
        console.log(`Número ${i}: Buzz`)
    }
    i++ //Incremento
}