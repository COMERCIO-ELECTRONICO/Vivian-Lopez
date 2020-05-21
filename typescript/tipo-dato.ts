//tipo de datos
const nombre: string = 'vivian';
const numero: number = 1;
const bool: boolean = true;
const obejeto: object = {
    nombre:'vivian',
}

//arreglos
const arregloUno: Array<number> = [];
const arregloDos: object[] = [];

//varios tipados

const nombreDos: (string | number) = 1
const arreglo1: Array<boolean | number> = [];
const arreglo2: (string | number)[] = [];

let variablelet: number;
const variableConts:number = 1;
//any introduce cualquier tipo de dato
let cualquiervariable:any

//funciones
function sumar(num1?:number, num2?:number): number{
let a = 2;
let b = 3;
if(num1){
a=num1;
}
if(num2){
    b=num2;
    }
return a+b
}
sumar(5);
sumar(5);
sumar();
console.log(sumar(5,5));
console.log(sumar(5));
console.log(sumar(5));

class Persona {
    constructor(
        protected nombre?: string,
        public apellido?: string
    ) {

    }
}
const nnuevaPersona = new Persona()

class hijo extends Persona {
    constructor(
        protected nombre: string,
        public apellido: string,
    ) {
        super(nombre, apellido);
        this.apellido = apellido;
    }
}

const hijoPersona = new hijo('vivian', 'lopez');
console.log(hijoPersona);
//creamos los constructores
class person {
    constructor(
        protected nombre?: string,
        protected apellido?: string
    ){}
}
class Person {
    constructor(
        protected nombre?: string,
        protected apellido?: string
    ) { }
}

class alumno extends Person {
    constructor(
        protected nombre?: string,
        protected apellido?: string
    ) {
        super(nombre, apellido);
    }

    set setNombre(nombre: string | any) {
        this.nombre = nombre;
    }
    set setApellido(apellido: string | any) {
        this.apellido = apellido;
    }

    get getNombre(): string | any {
        return this.nombre
    }
    get getApellido(): string | any {
        return this.nombre
    }
}

const alumnoNuevo: alumno = new alumno();
alumnoNuevo.setNombre('vivian');
alumnoNuevo.setApellido('');
alumnoNuevo.getApellido();