import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // credenciales
  email = '';
  pass = '';
  correo = '';
  
  seleccionadoValor;
  
  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['Vivian', 'Kevin', 'orlando'];
  ValorSeleccionado;
  constructor( 
    private readonly _router: Router ,
    private readonly _loginService: LoginService,
    

  ) {}
  
  ngOnInit(): void {
  

   /*  this._loginService.metodoGet('http://localhost:1337/usuario')
    
      .subscribe((resultadoMetodoGet)=>{
        console.log('Respuest de Get');
        console.log(resultadoMetodoGet);
      });*/
    
  } 
  seteoValorSeleccionado(eventoSeleecionado) {
    console.log(eventoSeleecionado);
    this.ValorSeleccionado = eventoSeleecionado;
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
  
  ingresar() {
    localStorage
    .setItem(
      'nombre', 
      JSON.stringify({nombre: 'Keivn'})
      );
    /* this._loginService.metodoPost('http://localhost:1337/usuario',
    {
      nombre: "vivian",
      edad: this.pass,
      correo: this.email,
      esCasado: false
    })
    
      .subscribe(
        (resultadoPost)=>{
        console.log('Respuest de Post');
        console.log(resultadoPost);
      })
    

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
    } */
  } 
  eliminarRegistroPorId(){
    this._loginService
    .metodoDelete('http://localhost:1337/usuario/2')
    .subscribe(
      (respuestDelete)=>{
        console.log(' repuesta de delete');
        console.log(respuestDelete);
      }
    )
  }
}