import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';
  tituloPadre = 'soy tu padre hola';
  nombreBotonPadre = 'alertar!!!!!!!!';
  imagenPadre = 'https://as.com/futbol/imagenes/2020/01/27/album/1580109965_448579_1580110002_album_grande.jpg';

obtenerRespuestaHijo(evento){
  console.log(evento);
}
}
