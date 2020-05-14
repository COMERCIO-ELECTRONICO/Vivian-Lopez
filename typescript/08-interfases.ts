// se manejan en typescript y nos ayuda a tener un mejor equipado 
// se les conoce como 
interface persona {
    nombre: string;
    apellido: string;
    edad:number,
    esSoltero: boolean 
}
interface correo {
    nombre: string 
}
interface trabajo extends correo,persona{
    nombreTrabajo: string
}

const policia:  trabajo = {
    apellido: '',
    edad:20,
    esSoltero: false,
    nombre: '',
    nombreTrabajo: ''
}

const valor = 1;
// castting 
//as
//valor as number
// <tipoDato>Variable
<number>valor