import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent implements OnInit {

usuarios:Usuarios[]=[];

public displayedColumns :string[] = ['id','nombreU', 'apellido_Paterno','apellido_Materno','edad','acciones']

  constructor(private servicioUsuarios:UsuariosService,
    private activatedRoute: ActivatedRoute,
    private snackBar:MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarUsuarios();    
  }

  cargarUsuarios(){
    this.servicioUsuarios.get().subscribe(response=>{
      console.log(response);
      this.usuarios=response;
    });
  }

  eliminar(usuarios:Usuarios){

    const dialogRef = this.dialog.open(MensajeConfirmacionComponent,{
      width:'350px',
      data:{
        mensaje:`¿Está seguro que desea eliminar al usuario ${usuarios.nombreU}?`
      }
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result==='Si'){

        this.servicioUsuarios.delete(usuarios.id)
        .subscribe((response)=>{                      
          this.snackBar.open('¡El usuario fue eliminado con éxito!','',{
            duration:3000
          });
          this.cargarUsuarios();
        }) 

      }
    });
    
  }
}
