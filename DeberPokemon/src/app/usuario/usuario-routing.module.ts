import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListarComponent } from './listar/listar.component';
import { UsuarioCrearComponent  } from './crear/crear.component';
import { UsuarioEditarComponent  } from './editar/editar.component';
const routes: Routes = [
  {
    path: 'listar',
    component: UsuarioListarComponent 
  },
  {
    path: 'crear',
    component: UsuarioCrearComponent 
  },
  {
    path: 'editar',
    component: UsuarioEditarComponent 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
