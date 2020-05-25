import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  correo = '';
  pass = '';
  seleccionadoValor;
  
  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['Vivian', 'Kevin', 'orlando'];
  constructor(
    private readonly _router: Router ,
  ) { }
  
  ngOnInit(): void {
  }
  buscarSugerencia(evento) {
     console.log(evento.query);
    if(evento.query !== ''){
      this.sugerencias = ['vivian','Kevin','orlando'];
      const valorEncontrado = this.sugerencias.find((item)=>{
        return item === evento.query;
      
      
    });
    console.log(valorEncontrado);
    this.arregloResultado.push(valorEncontrado);
    this.sugerencias = this.arregloResultado;
  }else 
    this.sugerencias = ['vivian','Kevin','orlando'];
    /*this.sugerencias =['hola']; */
  }
  valorSeleccionado(evento) {
    console.log(evento);
    this.seleccionadoValor = evento;
  }
  ingresar() {
    console.log(this.valorAutocomplete);

    if (this.pass === '1234') {
      alert(this.correo);
      if (this.seleccionadoValor === 'vivian') {
        alert('Estudiante');
          this._router.navigate(
            ['/estudiante','perfil']
            )
      } if (this.seleccionadoValor === 'Kevin') {
        alert('Profesor');
          this._router.navigate(
            ['/profesor','perfil']
            )
      }
    } else {
      alert('no ingreso');
    }
  }
}
