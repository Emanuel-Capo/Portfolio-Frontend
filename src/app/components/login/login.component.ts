import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'

import { LoginServiceService } from './login-service.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private login:LoginServiceService) { }

  ngOnInit(): void {
  }

  miFormulario:FormGroup= this.fb.group({
    nombre:'',
    password:''
  })

  usuarioForm:Usuario={
    nombre:'',
    password:''
  }

  validar(){
    this.login.validarUsuario(this.usuarioForm).subscribe(data=>{
    if (data !== null) {sessionStorage.setItem("token", JSON.stringify(data))
    Swal.fire({
      title: 'Ya puedes editar el portfolio',
      icon:'success'
    })}
    else {Swal.fire({
    title: 'Nombre de usuario o Contraseña incorrectos',
    icon:'error'
    })}})
  }

   sesion(){
     this.usuarioForm.nombre=this.miFormulario.value.nombre
     this.usuarioForm.password=this.miFormulario.value.password
     console.log(this.usuarioForm)
     this.validar()
  }

  

  // validUser(){
  //   if (this.usuarioForm.nombre =='Emanuel' && this.usuarioForm.password=='123456') sessionStorage.setItem('token','validado')
  // }

  
}
