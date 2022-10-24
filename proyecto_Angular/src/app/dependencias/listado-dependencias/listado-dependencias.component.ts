import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dependencias } from 'src/app/models/dependencias.model';
import { DependenciasService } from 'src/app/services/dependencias.service';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';

@Component({
  selector: 'app-listado-dependencias',
  templateUrl: './listado-dependencias.component.html',
  styleUrls: ['./listado-dependencias.component.scss']
})
export class ListadoDependenciasComponent implements OnInit {

  dependencias:Dependencias[]=[];
  public displayedColumns :string[] = ['id','nombreD','siglas','ubicacion','acciones']

  dataSource:any []=[];

  constructor(private servicioDependencias:DependenciasService,
    private snackBar:MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarDependencias();
    
  }

  cargarDependencias(){
    this.servicioDependencias.get().subscribe(response=>{
      console.log(response);
      this.dependencias=response;
    });
  }

  eliminar(dependencia: Dependencias){
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent,{
      width:'350px',
      data:{
        mensaje:`¿Está seguro que desea eliminar la dependencia ${dependencia.nombreD}?`
      }
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result==='Si'){
        this.servicioDependencias.delete(dependencia.id)
        .subscribe((response)=>{
          this.snackBar.open('¡La dependencia fue eliminada con éxito!','',{
            duration:3000
          });
          this.cargarDependencias();
        })
      }
    });
  }

}
