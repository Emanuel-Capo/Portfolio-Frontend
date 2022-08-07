import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from './persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  private baseURL="http://localhost:8080/api/persona"

  header:HttpHeaders=new HttpHeaders({'Authorization':JSON.parse(sessionStorage.getItem('token')||'{}').token})

  constructor(private HttpClient: HttpClient) { }

  obtenerPersona():Observable<Persona>{
    return this.HttpClient.get<Persona>(`${this.baseURL}/ver`)
  }

  editarPersona(persona:Persona):Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/modificar`,persona,{headers:this.header})
  }
} 
