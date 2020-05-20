import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListarComponent } from './listar/listar.component';
import { UsuarioCrearComponent } from './crear/crear.component';
import { UsuarioEditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [UsuarioListarComponent, UsuarioCrearComponent, UsuarioEditarComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
