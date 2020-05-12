//tipo de datos
var nombre = 'vivian';
var numero = 1;
var bool = true;
var obejeto = {
    nombre: 'vivian'
};
//arreglos
var arregloUno = [];
var arregloDos = [];
//varios tipados
var nombreDos = 1;
var arreglo1 = [];
var arreglo2 = [];
var variablelet;
var variableConts = 1;
//any introduce cualquier tipo de dato
var cualquiervariable;
//funciones
function sumar(num1, num2) {
    var a = 2;
    var b = 3;
    if (num1) {
        a = num1;
    }
    if (num2) {
        b = num2;
    }
    return a + b;
}
sumar(5);
sumar(5);
sumar();
console.log(sumar(5, 5));
console.log(sumar(5));
console.log(sumar(5));
