import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from './proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  // private baseURL="https://portfolio-ema.herokuapp.com/api/proyectos"
  private baseURL="https://portfolio-backend-production-0d9f.up.railway.app/api/proyectos"

  header:HttpHeaders=new HttpHeaders({'Authorization':JSON.parse(sessionStorage.getItem('token')||'{}').token})

  constructor(private HttpClient: HttpClient) { }

  obtenerProyectos():Observable<Proyecto[]>{
    return this.HttpClient.get<Proyecto[]>(`${this.baseURL}/ver`)
  }

  agregarProyectos(proyecto:Proyecto):Observable<Object>{
    return this.HttpClient.post(`${this.baseURL}/crear`,proyecto,{headers:this.header})
  }

  borrarProyectos(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseURL}/borrar/${id}`,{headers:this.header})
  }

  editarProyectos(id:number,proyecto:Proyecto):Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/modificar/${id}`,proyecto,{headers:this.header})
  }
}
