import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from './educacion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private baseURL="http://localhost:8080/api/educacion"

  constructor(private HttpClient: HttpClient) { }

  obtenerEducacion():Observable<Educacion[]>{
    return this.HttpClient.get<Educacion[]>(`${this.baseURL}/ver`)
  }

  agregarEducacion(educacion:Educacion):Observable<Object>{
    return this.HttpClient.post(`${this.baseURL}/crear`,educacion)
  }

  borrarEducacion(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseURL}/borrar/${id}`)
  }

  editarEducacion(id:number,educacion:Educacion):Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/modificar/${id}`,educacion)
  }
}
