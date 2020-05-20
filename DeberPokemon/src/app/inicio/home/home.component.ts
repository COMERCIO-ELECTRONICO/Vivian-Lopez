import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }
  irAListar() {
    this._router.navigate(['/usuario', 'listar']);
  }
  irACrear() {
    this._router.navigate(['/usuario', 'crear']);
  }
  irAEditar() {
    this._router.navigate(['/usuario', 'editar']);
  }
}
