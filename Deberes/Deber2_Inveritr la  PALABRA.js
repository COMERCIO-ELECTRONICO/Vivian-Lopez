
/* 1. - DEBER : Inveritr la  PALABRA='COMERCIO ELECTRONICO' */

const invertirPalabra = palabra => palabra.split("").reverse().join("");
 
let palabra = "COMERCIO ELECTRONICO";
console.log("PALABRA INVERTIDA");
console.log("-------------------------------");
console.log(invertirPalabra(palabra));
console.log("-------------------------------");

/* /* 2. - DEBER:
UTILICEN FUNCIONES
- primera palabra en mayuscula
- la palabra de la mitad en mayuscula
- ultima palabra  en mayuscula
- sumar todos los punto
- sumar todos las comas */

var texto = "Realiza fotografías de 20 megapíxeles y \
puede utilizar un perfil de color Dlog-M \
de 10 bits, con el que se obtiene un rango \
dinámico más amplio al registrar hasta mil millones de \
colores. Esto queda bastante por encima de los 16 millones de \
colores de los perfiles de 8 bits, pudiendo dejar más margen y \
libertad en la edición posterior del material.\
Por su parte, el Mavic 2 Zoom cuenta con\
un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto.\
En este caso es capaz de realizar capturas de 12 megapíxeles,\
disponiendo un zoom automático híbrido (que combina detección de fase y contraste)\
de una función de 'Superresolución' que recurre al zoom óptico para realizar nueve\
fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle).\
" 

primeraPalabra(texto);
function primeraPalabra(texto){
    var palabras = texto.split(" ")
    console.log("PRIMERA PALABRA EN MAYUSCULA");
    console.log(palabras[0].toUpperCase())
}
PalabraMitad(texto);

function PalabraMitad(texto){
    var palabras = texto.split(" ")
    var tam = palabras.length //cuenta el numero de las palabras 
    num = tam / 2 // aqui sacamos la mitad del numero de palabras 
    if(tam % 2 == 0){

        medio =  palabras[num-1]+ " " +palabras[num]
    }else {

        numm = Math.trunc(num) //saca la parte entera de la division  
        medio = palabras [numm] 

    } 
    console.log("PRIMERA PALABRA EN MAYUSCULA");
    console.log(medio.toUpperCase()) 
    
    
}
finalPalabra(texto);
function finalPalabra(texto){
    var palabras = texto.split(" ") 
    var tam = palabras.length 
    console.log("PALABRA FINAL EN MAYUSCULA");
    console.log(palabras[tam-1].toUpperCase())
}

puntos(texto);
function puntos(texto){
    var palabras = texto.split(".") 
    var tam = palabras.length 
    console.log("NUMERO DE LOS PUNTOS");
    console.log(tam -1) 

}
comas(texto);
function comas(texto){
    var palabras = texto.split(",") 
    var tam = palabras.length 
    console.log("NUMERO DE LAS COMAS");
    console.log(tam -1) 

}





