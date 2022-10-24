import { Component } from '@angular/core';
import { DependenciasService } from './services/dependencias.service';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoAngular';

  /*constructor(private servicioDependencia:DependenciasService){
    this.servicioDependencia.get()
    .subscribe(dependencias=>{
      console.log(dependencias);
    });
  }*/
  
  constructor(private servicioUsuarios:UsuariosService){
    this.servicioUsuarios.get()
    .subscribe(usuarios=>{
      console.log(usuarios);
    });
  }
}
