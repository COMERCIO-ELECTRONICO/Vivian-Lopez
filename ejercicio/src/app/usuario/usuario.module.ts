import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoUserComponent } from './info-user/info-user.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { UsuarioRoutes } from './usuario.routes';

@NgModule({
  declarations: [InfoUserComponent],
  imports: [  
    CommonModule,
    UsuarioRoutes,
    MatInputModule,
    FormsModule
  ]
})
export class UsuarioModule { }
