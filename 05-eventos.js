const EventEmmiter = require('events')

class entrarALaCasa extends EventEmmiter{}
const entraCasa = new entrarALaCasa() 
var nombreEvento = 'entrar por la puerta de aldelante hola'

// evento que escucha
// ON
entrarCasa.on(nombreEvento, (nombre) => {
    console.log(`saludar a ${nombre}, que ingreso por la puerta de adelante`);
})

// evento que emite
// EMIT

entrarCasa.emit(nombreEvento,'kevin')

