import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidades } from './habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  private baseURL="http://localhost:8080/api/habilidades"

  constructor(private HttpClient: HttpClient) { }

  obtenerHabilidades():Observable<Habilidades[]>{
    return this.HttpClient.get<Habilidades[]>(`${this.baseURL}/ver`)
  }

  agregarHabilidades(habilidades:Habilidades):Observable<Object>{
    return this.HttpClient.post(`${this.baseURL}/crear`,habilidades)
  }

  borrarHabilidades(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseURL}/borrar/${id}`)
  }

  editarHabilidades(id:number,habilidades:Habilidades):Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/modificar/${id}`,habilidades)
  }
}
