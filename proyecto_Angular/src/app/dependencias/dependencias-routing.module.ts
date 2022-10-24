import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoUsuariosComponent } from '../usuarios/listado-usuarios/listado-usuarios.component';
import { AgregarEditarDependenciasComponent } from './agregar-editar-dependencias/agregar-editar-dependencias.component';
import { ListadoDependenciasComponent } from './listado-dependencias/listado-dependencias.component';

const routes: Routes = [
  {
    path:'',
    component:ListadoDependenciasComponent
  },
  {
    path:':id',
    component:AgregarEditarDependenciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependenciasRoutingModule { }
