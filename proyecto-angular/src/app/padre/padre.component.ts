import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {
  constructor() { }
  //@Input() edad: number;
  public edad:number;
  // declaramos variables de tipo number

  vanio='';
  ngOnInit(): void {
  //
  }

  
}
