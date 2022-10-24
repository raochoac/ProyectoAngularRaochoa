import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dependencias } from '../models/dependencias.model';

@Injectable({
  providedIn: 'root'
})
export class DependenciasService {

  private urlDep = environment.apiUrl;

  constructor(private http:HttpClient) { }

  get(): Observable<Dependencias[]>{    
    return this.http.get<Dependencias[]>(`${this.urlDep}dependencias`);
  }

  save(dependencias:Dependencias):Observable<any>{
    return this.http.post(`${this.urlDep}dependencias`,dependencias);
  }

  getById(id:number):Observable<any>{
    return this.http.get<Dependencias>(`${this.urlDep}dependencias/${id}`);

  }

  update(id:number, dependencias:Dependencias){
    return this.http.put(`${this.urlDep}dependencias/${id}`,dependencias);  
  }

  delete(id:number){
    return this.http.delete(`${this.urlDep}dependencias/${id}`);
  }
}
