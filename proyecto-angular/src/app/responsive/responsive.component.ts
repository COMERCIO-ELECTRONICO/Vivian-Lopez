import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.scss']
})
export class ResponsiveComponent implements OnInit {

  constructor() { }
  arregloMaterias = [{ nombre: 'Comercio Electrónico' }, { nombre: 'Datawarehouse' }];
  arregloCartelera = [{ nombre: 'Reunión interactiva' }, { nombre: 'Información Profesor' },{ nombre: 'Calificaciones' },{ nombre: 'Sugerencias' }];

  ngOnInit(): void {
  }

}
