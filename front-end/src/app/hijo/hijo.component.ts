  
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  constructor() { }
  @Input() valorDelPadre: string;

  ngOnInit() {

  }

  alertaValorPadre() {
    alert(this.valorDelPadre)
  }

}
