import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidades } from './habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  private baseURL="https://portfolio-ema.herokuapp.com/api/habilidades"

  header:HttpHeaders=new HttpHeaders({'Authorization':JSON.parse(sessionStorage.getItem('token')||'{}').token})

  constructor(private HttpClient: HttpClient) { }

  obtenerHabilidades():Observable<Habilidades[]>{
    return this.HttpClient.get<Habilidades[]>(`${this.baseURL}/ver`)
  }

  agregarHabilidades(habilidades:Habilidades):Observable<Object>{
    return this.HttpClient.post(`${this.baseURL}/crear`,habilidades,{headers:this.header})
  }

  borrarHabilidades(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseURL}/borrar/${id}`,{headers:this.header})
  }

  editarHabilidades(id:number,habilidades:Habilidades):Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/modificar/${id}`,habilidades,{headers:this.header})
  }
}
