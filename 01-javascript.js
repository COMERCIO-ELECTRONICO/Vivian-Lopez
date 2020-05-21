// TIPO DE DATOS (NUMBER), STRING,BOOL
// VAR - CONST ->

var json = {
nombre: 'Vivian',
edad: 20,
soltero: true,
fecha: new Date(1999 - 09 - 19),
}
console.log(json.nombre)
console.log(json['edad'])
json.nombre = 'nuevo'
json.direccion = 'sol'
/*console.error()
console.info()
console.warn()*/
 
var json2 = {
    nombre: 'Vivian',
    edad: 20,
    soltero: true,
    fecha: new Date('1999 - 09 - 19'),
    interese: {
        hobbies: [
            'futbol',
            'ps4'
        ],
        peliculas: [
            {
            nombre: '',
            tipo: '',
            esBuena:true,
            },
            
                {
                nombre: '',
                tipo: '',
                esBuena:true,
                }
                
            
            
        ]
    } ,
    familia: [
        {
        nombre: '',
        edad: 1,
        
        },
        {
            nombre: '',
        edad: 1,
            
            }
        
    ]
}
var json2String = JSON.stringify(json2)
console.log(json2)
console.log(json2String)

// Parse

var jsonParse = JSON.parse(json2String)
console.log(jsonParse)