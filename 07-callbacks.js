
function primeraFuncion(){
    setTimeout(
        ()=> {
            console.log('primera')
        }, 500
        
    )
    
}
function segundaFuncion(){
    console.log('2')
}
/* primeraFuncion()
segundaFuncion() */

function saluda(nombre, callback) { //el callback siempre va al final 
    console.log('saludo a', nombre)

    callback()//retornamos a la funcion 
}

function funcionCallback() {
    primeraFuncion()
    segundaFuncion()
    console.log('ya salude')
}

saluda('vivian', () => {
console.log('saludaste')
})

var arreglo = ['juan', 'juan', 'juan']
var nombreNuevo = 'juan'
function anadirNombre(arreglo, nombre, indice, cb) {
    //arreglo.push(nombre);
    arreglo[indice] = nombre
    cb(
        {
            mensaje: 'exito',
            arreglo
        }
    )
}
anadirNombre(arreglo, 'vivian', 2, (mensaje) => {
    console.log(mensaje)
})

// DEBER
/*
usar un arreglo de json (nombre, edad, fechaNacimiento, Telf)
- callback crear UN USUARIO (JSON) -> buscar en si ya existe debe impirmir q ya existe y sino crearlo
- callback editar un usuario
- callback eliminar un usuario
- callback listar usuario
*/
var arregloUsuario = [1, 2, 3, 4, 5]

function listarUsuario(arreglo,  cb) {
    //arreglo.push(nombre);
    arreglo
    .forEach(
       
           usuario =>  {
            console.log(usuario);
        });
        cb ({
            mensaje:'listarUsuario'
        })
    
}
listarUsuario(arregloUsuario, (Respuestamensaje) => {
    console.log(Respuestamensaje);
})
//null var numero = 0;
// undefined 
// en jvascript usamos el === o == ejemplo '1' === '1'
