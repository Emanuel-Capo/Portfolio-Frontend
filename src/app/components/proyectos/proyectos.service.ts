import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from './proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private baseURL="http://localhost:8080/api/proyectos"

  constructor(private HttpClient: HttpClient) { }

  obtenerProyectos():Observable<Proyecto[]>{
    return this.HttpClient.get<Proyecto[]>(`${this.baseURL}/ver`)
  }

  agregarProyectos(proyecto:Proyecto):Observable<Object>{
    return this.HttpClient.post(`${this.baseURL}/crear`,proyecto)
  }

  borrarProyectos(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseURL}/borrar/${id}`)
  }

  editarProyectos(id:number,proyecto:Proyecto):Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/modificar/${id}`,proyecto)
  }
}
