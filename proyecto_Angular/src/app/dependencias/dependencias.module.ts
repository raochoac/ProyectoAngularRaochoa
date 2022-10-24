import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependenciasRoutingModule } from './dependencias-routing.module';
import { ListadoDependenciasComponent } from './listado-dependencias/listado-dependencias.component';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarEditarDependenciasComponent } from './agregar-editar-dependencias/agregar-editar-dependencias.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListadoDependenciasComponent,
    AgregarEditarDependenciasComponent
  ],
  imports: [
    CommonModule,
    DependenciasRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DependenciasModule { }
