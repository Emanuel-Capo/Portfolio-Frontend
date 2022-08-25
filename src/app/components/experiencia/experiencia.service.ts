import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from './experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private baseURL="https://portfolio-ema.herokuapp.com/api/experiencia"

  header:HttpHeaders=new HttpHeaders({'Authorization':JSON.parse(sessionStorage.getItem('token')||'{}').token})

  constructor(private HttpClient: HttpClient) { }

  obtenerExperiencia():Observable<Experiencia[]>{
    return this.HttpClient.get<Experiencia[]>(`${this.baseURL}/ver`)
  } 

  agregarExperiencia(experiencia:Experiencia):Observable<Object>{
    return this.HttpClient.post(`${this.baseURL}/crear`,experiencia,{headers:this.header})
  }

  borrarExperiencia(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseURL}/borrar/${id}`,{headers:this.header})
  }

  editarExperiencia(id:number,experiencia:Experiencia):Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/modificar/${id}`,experiencia,{headers:this.header})
  }
} 
