import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from './experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private baseURL="http://localhost:8080/api/experiencia"

  constructor(private HttpClient: HttpClient) { }

  obtenerExperiencia():Observable<Experiencia[]>{
    return this.HttpClient.get<Experiencia[]>(`${this.baseURL}/ver`)
  }

  agregarExperiencia(experiencia:Experiencia):Observable<Object>{
    return this.HttpClient.post(`${this.baseURL}/crear`,experiencia)
  }

  borrarExperiencia(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseURL}/borrar/${id}`)
  }

  editarExperiencia(id:number,experiencia:Experiencia):Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/modificar/${id}`,experiencia)
  }
}
