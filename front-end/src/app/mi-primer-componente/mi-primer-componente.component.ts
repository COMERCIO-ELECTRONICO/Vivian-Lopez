import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent implements OnInit {
  @Input() titulo: string;
  @Input() nombreBoton: string;
  @Input() imagenPath: string;

  @Output() saludoHijo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
SALUDAR(){
  alert('hola');
  this.saludoHijo.emit('saludo de tu hijo');
}
}
