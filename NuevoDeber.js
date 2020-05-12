import { func } from "joi"

var arregloJson = [
    {
        nombre:'vivian',
        edad:25,
        fechaNacimiento:new Date(),
        telef: 0945626253

    }
]
var nuevoUsuario = [
    {
        nombre:'camilo',
        edad:19,
        fechaNacimiento:new Date(),
        telef: 2837373238

    }
]

function crearUsuario(arregloJson,usuarioCrear,cb){
    var usuarioEncontrado = arregloJson
    .find((item)=>{
        return item.nombre === usuarioCrear.nombre
    })
    //console.log(usuarioEncontrado)
    if (usuarioEncontrado !== undefined){
    arreglo.push(usuarioCrear)
    cb({
        mensaje: 'Usuario creado',
        usuario: usuarioCrear,
        arreglo
    }) 
    }else {
        cb({
        mensaje: 'Usuario existe',
        usuario: usuarioCrear,
        arreglo
    }) 
    }
}
crearUsuario(arregloJsons, usuarioNuevo, (respuestaCallback) => {
    console.log(`mensaje: ${respuestaCallback.mensaje}, usuario: ${respuestaCallback.usuario}`)
    console.log(respuestaCallback.arreglo)
})

function eliminarUsuario(arreglo, nombreUsuario, cb) {

    var indiceUsuario = arreglo
        .findIndex(
            (item) => {
                return item.nombre === nombreUsuario
            })
    console.log(indiceUsuario);
    if (indiceUsuario !== -1) {
        arreglo.splice(indiceUsuario, 1)
        cb({
            mensaje: 'eliminado'
        })
    } else {
        cb({
            mensaje: 'eliminado no'
        })
    }

}

eliminarUsuario(arregloJsons, 'kevin', (resultadoCallback) => {
    console.log(resultadoCallback)
    console.log(arregloJsons)
})
console.log(arregloJsons)