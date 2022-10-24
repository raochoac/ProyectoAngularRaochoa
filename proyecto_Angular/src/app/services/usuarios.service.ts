import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../models/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

private urlUSsuarios = environment.apiUrl;

  constructor(private http:HttpClient) { }

  get(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(`${this.urlUSsuarios}usuarios`);
  }
  save(usuarios:Usuarios):Observable<any>{
    return this.http.post(`${this.urlUSsuarios}usuarios`,usuarios);
  }

  getById(id:number):Observable<any>{
    //return this.http.get<Usuarios[]>(this.urlUSsuarios+'usuarios');
    return this.http.get<Usuarios>(`${this.urlUSsuarios}usuarios/${id}`);
  }

  update(id:number, usuarios:Usuarios){
    return this.http.put(`${this.urlUSsuarios}usuarios/${id}`,usuarios);  
  }

  delete(id:number){
    return this.http.delete(`${this.urlUSsuarios}usuarios/${id}`);
  }
}
