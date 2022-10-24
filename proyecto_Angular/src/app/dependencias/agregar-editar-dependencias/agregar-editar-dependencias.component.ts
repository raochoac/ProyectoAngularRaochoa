import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Dependencias } from 'src/app/models/dependencias.model';
import { DependenciasService } from 'src/app/services/dependencias.service';

@Component({
  selector: 'app-agregar-editar-dependencias',
  templateUrl: './agregar-editar-dependencias.component.html',
  styleUrls: ['./agregar-editar-dependencias.component.scss']
})
export class AgregarEditarDependenciasComponent implements OnInit {

  formularioDep!:FormGroup;
  id!:number;
  
  constructor(private fb:FormBuilder,
    private servicioDependencias:DependenciasService,
    private router:Router,
    private snackBar: MatSnackBar,
    private activatedRoute:ActivatedRoute) { 

    }

  ngOnInit(): void {
    this.formularioDep = this.fb.group({
      nombreD:[''],
      siglas:[''],
      ubicacion:['']
    })

    this.id = this.activatedRoute.snapshot.params['id'] ?
              +this.activatedRoute.snapshot.params['id']:0;

    if(this.id!==0){
      this.llenarDatosDependencias(this.id);
    }
  }

  llenarDatosDependencias(id:number){
    this.servicioDependencias.getById(id)
    .subscribe((dependencias:Dependencias)=>{
      this.formularioDep.patchValue({
        ...dependencias
      })
    });
  }

  guardarDep(){
    const dependencias: Dependencias={
      ...this.formularioDep.value
    };
    if(this.id===0){
      this.agregar(dependencias);
    }else{
      this.actualizar(this.id,dependencias);
    }
    
  }

  agregar(dependencias:Dependencias){
    this.servicioDependencias.save(dependencias).subscribe(response=>{
      console.log('se ha agregado mi dependencia');
      this.router.navigate(['/dependencias']);
    })
  }

  actualizar(id:number, dependencia:Dependencias){
    this.servicioDependencias.update(id,dependencia).subscribe(Response=>{
      this.snackBar.open('La dependencia fue editada exitosamente','',{
        duration:3000
      });
      this.router.navigate(['/dependencias']);
    })
  }
}
