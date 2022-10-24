import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarEditarUsuariosComponent } from './agregar-editar-usuarios/agregar-editar-usuarios.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListadoUsuariosComponent,
    AgregarEditarUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UsuariosModule { }
