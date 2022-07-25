import { Component, OnInit } from '@angular/core';
import { Educacion } from './educacion';
import { EducacionService } from './educacion.service';
import Swal from 'sweetalert2'

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
    fecha_fin:"2022-09-30"
  }];
  educacion!:Educacion;
  eduActual!:Educacion;

  educacionActual(edu:Educacion){
    this.eduActual=edu
    console.log(this.eduActual)
  }

  constructor(private educacionService:EducacionService){}
  
  ngOnInit() {
      this.obtenerEducaciones()            
    }

    obtenerEducaciones(){
      this.educacionService.obtenerEducacion().subscribe(data=>(this.educaciones=data))
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

}
