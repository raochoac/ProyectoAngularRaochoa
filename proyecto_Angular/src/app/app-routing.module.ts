import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path:'dependencias',
    loadChildren: ()=>
        import('./dependencias/dependencias.module')
        .then(m=>m.DependenciasModule)
  },
  {
    path:'usuarios',
    loadChildren: ()=>
        import('./usuarios/usuarios.module')
        .then(n=>n.UsuariosModule)
  },
  {
    path:'',
    redirectTo:'usuarios',
    pathMatch:'full'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
