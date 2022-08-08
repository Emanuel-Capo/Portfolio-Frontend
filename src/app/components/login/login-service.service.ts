import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService { 

  private baseURL="https://portfolio-ema.herokuapp.com/api/login/validar"

 // currentUserSubject:BehaviorSubject<any>

  constructor(private http: HttpClient) {
   // this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("nombre")||'{}'))
   }

  // iniciarSesion(credenciales:any):Observable<any>{
  //  return this.http.post(this.baseURL,credenciales).pipe(map(data=>{
  //    sessionStorage.setItem('nombre',JSON.stringify(data))
  //    return data
  //  }))}



  validarUsuario(usuario:Usuario):Observable<Object>{
    return this.http.post(this.baseURL,usuario)
    
  }






  

  

  
}
