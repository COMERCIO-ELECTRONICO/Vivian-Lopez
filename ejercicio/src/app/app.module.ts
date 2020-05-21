import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoEncontradoComponent,
    IniciarSesionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
