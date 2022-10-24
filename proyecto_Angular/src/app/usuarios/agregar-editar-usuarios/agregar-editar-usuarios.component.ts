import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-agregar-editar-usuarios',
  templateUrl: './agregar-editar-usuarios.component.html',
  styleUrls: ['./agregar-editar-usuarios.component.scss']
})
export class AgregarEditarUsuariosComponent implements OnInit {
  
  formulario!:FormGroup;
  id!:number;
  
  constructor(private fb:FormBuilder,
    private servicioUsuarios:UsuariosService,
    private router:Router,
    private snackBar:MatSnackBar,
    private activatedRoute:ActivatedRoute) { 
      
    }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombreU: [''],
      apellido_Paterno:[''],
      apellido_Materno:[''],
      edad:['']

    })

    this.id = this.activatedRoute.snapshot.params['id'] ?
              +this.activatedRoute.snapshot.params['id']:0;

    if(this.id!==0){
      this.llenarDatosUsuarios(this.id);
    }
  }

  llenarDatosUsuarios(id:number){
    this.servicioUsuarios.getById(id)
    .subscribe((usuarios:Usuarios)=>{
      this.formulario.patchValue({
        ...usuarios
      })
    });
  }

  guardar(){
    const usuario: Usuarios={
      ...this.formulario.value
    };
    if(this.id===0){
      this.agregar(usuario);
    }else{
      this.actualizar(this.id,usuario);
    }
    
  }

  agregar(usuario:Usuarios){
    this.servicioUsuarios.save(usuario).subscribe(response=>{
      console.log('se ha agregado el usuario');
      this.snackBar.open('El usuario fue agregado exitosamente','',{
        duration:3000
      });
      this.router.navigate(['/usuarios']);
    })
  }

  actualizar(id:number, usuario:Usuarios){
    this.servicioUsuarios.update(id,usuario).subscribe(response=>{
      this.snackBar.open('La usuario fue editada exitosamente','',{
        duration:3000
      });
      this.router.navigate(['/usuarios']);
    })
  }

  get nombre(){
    return this.getControlFormulario('nombre');
  }

  getControlFormulario=(valor:string)=>this.formulario.get(valor);
}
