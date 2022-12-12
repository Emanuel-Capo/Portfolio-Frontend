import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from './educacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  // private baseURL="https://portfolio-ema.herokuapp.com/api/educacion"
  private baseURL="https://portfolio-backend-production-0d9f.up.railway.app/api/educacion"

  header:HttpHeaders=new HttpHeaders({'Authorization':JSON.parse(sessionStorage.getItem('token')||'{}').token})

  constructor(private HttpClient: HttpClient) { }

  obtenerEducacion():Observable<Educacion[]>{
    return this.HttpClient.get<Educacion[]>(`${this.baseURL}/ver`)
  } 

  agregarEducacion(educacion:Educacion):Observable<Object>{
    return this.HttpClient.post(`${this.baseURL}/crear`,educacion,{headers:this.header})
  }

  borrarEducacion(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseURL}/borrar/${id}`,{headers:this.header})
  }

  editarEducacion(id:number,educacion:Educacion):Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/modificar/${id}`,educacion,{headers:this.header})
  }
}
