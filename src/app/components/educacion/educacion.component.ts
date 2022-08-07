import { Component, OnInit } from '@angular/core';
import { Educacion } from './educacion';
import { EducacionService } from './educacion.service';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {


  educaciones:Educacion[]=[{
    id:0,
    titulo:"Programador Fullstack",
    academia:"Argentina Programa",
    fecha_fin:"2022-09-30",
    img:"assets/APLogo-20-20.png"
  }];
  educacion:Educacion={
    titulo     :'',
    academia   :'',
    fecha_fin  :'',
    img        :''
  };
  eduActual!:Educacion;  

  miFormulario:FormGroup = this.fb.group({
    titulo     :'',
    academia   :'',
    fecha_fin  :'',
    img        :''
  })    

  editMode:boolean=true
  dataOK:boolean=false

  constructor(private educacionService:EducacionService,
              private fb:FormBuilder){} 
  
  ngOnInit() {
      this.obtenerEducaciones()            
    }

    obtenerEducaciones(){
      this.educacionService.obtenerEducacion().subscribe(data=>{
        (this.educaciones=data)
        this.dataOK=true
      })
    }    

   agregarEducacion(data:Educacion){
      this.educacionService.agregarEducacion(data).subscribe({
        next:(r)=>(Swal.fire({
          title: 'Agregado con éxito',
          icon:'success'
      }).then((r)=> window.location.reload()) ),
      error:(e)=>{Swal.fire({
        title: 'No se pudo agregar',
        icon:'error'
    })}})      
    }

    eliminarEducacion(id:number){
      this.educacionService.borrarEducacion(id).subscribe((r)=>
      Swal.fire({
        title: 'Eliminado con éxito',
        icon:'success'
    }).then((r)=> window.location.reload()))
    }

    editarEducacion(id:number, data:Educacion){
      this.educacionService.editarEducacion(id, data).subscribe((r)=>
      Swal.fire({
        title: 'Editado con éxito',
        icon:'success'
    }).then((r)=> window.location.reload()))
    }



    validado():boolean{
      return (sessionStorage.getItem('token')!==null)
    }

   

    educacionActual(edu:Educacion){
      this.editMode=true
      this.eduActual=edu
      this.miFormulario.reset({
        titulo: this.eduActual.titulo,
        academia: this.eduActual.academia,
        fecha_fin:this.eduActual.fecha_fin,
        img:this.eduActual.img
      })
    }   
     
    save(){
      this.educacion.titulo=this.miFormulario.value.titulo
      this.educacion.academia=this.miFormulario.value.academia
      this.educacion.fecha_fin=this.miFormulario.value.fecha_fin
      this.educacion.img=this.miFormulario.value.img
    }

    guardar(){
      this.save()
      if (this.editMode) this.editarEducacion(this.eduActual.id!,this.educacion)
      else (this.agregarEducacion(this.educacion))
    }

    addMode(){
      this.miFormulario.reset()
      this.editMode=false
    }
}
