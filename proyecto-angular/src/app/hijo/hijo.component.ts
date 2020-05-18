import { Component, OnInit, Input } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  constructor(public padre: PadreComponent) { }

  //constructor() { }
  @Input() anio: number;
  edad: number;

  ngOnInit(): void {
  }

  calcularEdad(){
    this.edad= 2020-this.anio;
    this.padre.edad=this.edad;
    console.log(this.edad);
    //alert(this.edad)
  }

}
