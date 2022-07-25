import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from './experiencia.service';
import { Experiencia } from './experiencia';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias:Experiencia[]=[{
    id:0,
    trabajo:"Desarrollador Fullstack",
    empresa:"Programadores S.A.",
    fecha_inicio:"2020-04-22",
    fecha_fin:"2022-02-05",
    descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum assumenda molestias voluptatibus sequi ea eligendi illo tempore excepturi facilis inventore totam, eum quasi voluptas sunt consequuntur, dolorem dolor pariatur!"
  }];
  experiencia!:Experiencia;
  experActual!:Experiencia;

  experienciaActual(exp:Experiencia){
    this.experActual=exp
    console.log(this.experActual)
  }

  constructor(private experienciaService:ExperienciaService){}
  
  ngOnInit() {
      this.obtenerExperiencias()            
    }

    obtenerExperiencias(){
      this.experienciaService.obtenerExperiencia().subscribe(data=>(this.experiencias=data))
    }    
   


   agregarExperiencia(data:Experiencia){
      this.experienciaService.agregarExperiencia(data).subscribe({
        next:(r)=>(Swal.fire({
          title: 'Agregado con éxito',
          icon:'success'
      }).then((r)=> window.location.reload()) ),
      error:(e)=>{Swal.fire({
        title: 'No se pudo agregar',
        icon:'error'
    })}})
   
   
    }

    eliminarExperiencia(id:number){
      this.experienciaService.borrarExperiencia(id).subscribe((r)=>
      Swal.fire({
        title: 'Eliminado con éxito',
        icon:'success'
    }).then((r)=> window.location.reload()))
    }

    editarExperiencia(id:number, data:Experiencia){
      this.experienciaService.editarExperiencia(id, data).subscribe((r)=>
      Swal.fire({
        title: 'Editado con éxito',
        icon:'success'
    }).then((r)=> window.location.reload()))
    }

    


}

