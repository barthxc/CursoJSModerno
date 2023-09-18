export const nombreCliente = 'Pablo';

export const ahorro = 200 ;

export function mostrarInformación(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`
}


export function tieneSaldo(ahorro){
    if(ahorro>0){
        console.log('Tiene saldo')
    }else{
        console.log('No tiene salgo')
    }
}

export class Cliente{
    constructor(nombre,ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`
    }
}



export default function nuevaFuncion(){
    console.log('Este es el export default');
}