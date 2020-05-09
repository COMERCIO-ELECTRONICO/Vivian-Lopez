//
/* arreglo uno, multiplique * 2, y me filtrar los pares, usar map y filter
arreglo dos, filter los impares , sumar + 2 */


var json = {
    arreglos: {
        uno: [2, 4, 5, 8, 6, 9, 10],
        dos: [
            {valor: 1},
            {valor: 4},
            {valor: 2},
            {valor: 24},
            {valor: 100},
            {valor: 23},
            {valor: 45},
            {valor: 23}
        ]
    }
   
}
var arregloUnoM = json.arreglos.uno
    .map(
        (item) => {
            return item * 2;
        }
    )
    var arregloUnoP = json.arreglos.uno
    .filter(
        (item) => {
            return (item % 2)== 0; 
        }
    )
   
    
    var arregloimpar =json.arreglos.dos
    .filter(
        (item) => {
            return (item.valor % 2)== 1; 
        }
        
    )
    var arregloSu = arregloimpar
    .map(
        (item) => {
            return (item.valor + 2);
        }
    )
    

     console.log ('Numeros multipicados por 2 ');
    console.log (arregloUnoM);
    console.log ('Numeros Pares');
    console.log (arregloUnoM);
    console.log ('Numeros impares ');
    console.log (arregloimpar);
    console.log ('Numeros impares + 2');
    console.log (arregloSu); 
