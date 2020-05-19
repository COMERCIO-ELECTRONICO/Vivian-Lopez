import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListarComponent } from './listar/listar.component';
import { UsuarioCrearComponent } from './crear/crear.component';


@NgModule({
  declarations: [UsuarioListarComponent, UsuarioCrearComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
