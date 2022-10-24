import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarUsuariosComponent } from './agregar-editar-usuarios/agregar-editar-usuarios.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';

const routes: Routes = [
  {
    path:'',
    component:ListadoUsuariosComponent
  },
  {
    path:':id',
    component:AgregarEditarUsuariosComponent    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
