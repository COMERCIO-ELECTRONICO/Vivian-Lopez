import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

const rutas: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent,
  },
  {
    path: 'estudiante/perfil',
    component: PerfilUsuarioComponent,
  },
  {
    path: 'usuario',
    loadChildren: () =>
    import('./usuario/usuario.module')
    .then(mod=> mod.UsuarioModule)
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NoEncontradoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutes {}
