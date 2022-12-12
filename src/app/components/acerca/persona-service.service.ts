import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from './persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  // private baseURL="https://portfolio-ema.herokuapp.com/api/persona"
  private baseURL="https://portfolio-backend-production-0d9f.up.railway.app/api/persona"

  header:HttpHeaders=new HttpHeaders({'Authorization':JSON.parse(sessionStorage.getItem('token')||'{}').token})

  constructor(private HttpClient: HttpClient) { }

  obtenerPersona():Observable<Persona>{
    return this.HttpClient.get<Persona>(`${this.baseURL}/ver`)
  }

  editarPersona(persona:Persona):Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/modificar`,persona,{headers:this.header})
  }
} 
