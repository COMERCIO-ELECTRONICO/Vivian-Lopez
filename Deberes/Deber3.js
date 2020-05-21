
var arreglo=[
   
    
    {nombre:'Vivian',edad:20,fechaNacimiento: new Date(1999/09/09), telef:"0293838719"},
    {nombre:'Emily',edad:18,fechaNacimiento: new Date(2002/02/28), telef:"0293838719"},
]
console.log("-----------------------------------------------------------------------------------------")
console.log("CREAR")
var nuevoUsua=[
   
    
    {nombre:'Anabelle',edad:10,fechaNacimiento: new Date(2001/10/28),telef:"0927361626"},
    {nombre:'Sebastian',edad:22,fechaNacimiento: new Date(1996/11/28),telef:"2937373721"},
]
 function crearUsuario(arreglo,nuevoUsua,ingreUsuario){
     for (var num = 0; num < arreglo.length; num++) {
         if(arreglo[num].nombre === nuevoUsua.nombre){
             return error()
         }    
     }
     ingreUsuario(arreglo,nuevoUsua) 
 }
 function error(){
     console.error("El usuario ya existe")
 }
 function ingreUsuario(arreglo,nuevoUsua){
 arreglo.push(nuevoUsua)
console.log(arreglo)
 console.info("El usuario se creo correctamente")
}
crearUsuario(arreglo,nuevoUsua,ingreUsuario)
console.log("--------------------------------------------------------------------------------------------")
console.log("EDITAR")

function editarUsuario(arreglo,nombre,num,cb){
    arreglo[num]=nombre;
    cb({
        mensaje: 'El usuario ha sido cambiado correctamente',
        arreglo
    })
}

var editUsua = {nombre:'Anabelle',edad:10,fechaNacimiento: new Date(2001/10/28),telef:"0927361626"};
   

editarUsuario(arreglo,editUsua,0,(respuestaMensaje) => {
    console.log(respuestaMensaje);
})
console.log("--------------------------------------------------------------------------------------------")
console.log("ELIMINAR")

var nuevoUsua = {nombre:'Anabelle',edad:10,fechaNacimiento: new Date(2001/10/28),telef:"0927361626"};


 function eliminarUsuario(arreglo,nuevoUsua,borrar){
     for (var num = 0; num < arreglo.length; num++) {
         if(arreglo[num].nombre===nuevoUsua.nombre){
             return borrar(arreglo,num,)
         }    
     }
    error()
 }
 function error(){
     console.error("El usuario no existe")
 }
 function eliminar(arreglo,num){
  for (let i = num; i < arreglo.length-1; i++) {
      arreglo[i]=arreglo[i+1]
  }
     console.log(arreglo)
     console.log("Los datos han sido eliminados correctamente ")
}
eliminarUsuario(arreglo,nuevoUsua,eliminar)
console.log("----------------------------------------------------------------------------------------")
console.log("LISTAR")

function listarUsuario(arreglo, cb) {
    arreglo
        .forEach(
            nombre => {
                console.log(nombre);
            });
    cb({
        mensaje: 'Lista de usuarios'
    })
}

listarUsuario(arreglo, (respuestaMensaje) => {
    console.log(respuestaMensaje);
})

