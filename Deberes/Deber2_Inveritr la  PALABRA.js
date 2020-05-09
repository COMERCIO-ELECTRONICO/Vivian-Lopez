
/* 1. - DEBER : Inveritr la  PALABRA='COMERCIO ELECTRONICO' */

const invertirPalabra = palabra => palabra.split("").reverse().join("");
 
let palabra = "COMERCIO ELECTRONICO";
console.log("PALABRA INVERTIDA");
console.log("-------------------------------");
console.log(invertirPalabra(palabra));
console.log("-------------------------------");