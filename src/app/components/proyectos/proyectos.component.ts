import { Component, OnInit } from '@angular/core';
import { Proyecto } from './proyectos';
import { ProyectosService } from './proyectos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:Proyecto[]=[{
    id:0,
    nombre:"Paginas web",
    descripcion:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    link:"",
    img:"assets/pagina.jpg"
  },
{
  id:1,
    nombre:"Juegos",
    descripcion:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    link:"",
    img:"assets/tetris.jpg"
}];
  proyecto!:Proyecto;
  proyActual!:Proyecto;

  proyectoActual(proy:Proyecto){
    this.proyActual=proy
  }

  constructor(private ProyectoService:ProyectosService){}
  
  ngOnInit() {
      this.obtenerProyectos()            
    }

    obtenerProyectos(){
      this.ProyectoService.obtenerProyectos().subscribe(data=>(this.proyectos=data))
    }    
   


   agregarProyecto(data:Proyecto){
      this.ProyectoService.agregarProyectos(data).subscribe({
        next:(r)=>(Swal.fire({
          title: 'Agregado con éxito',
          icon:'success'
      }).then((r)=> window.location.reload()) ),
      error:(e)=>{Swal.fire({
        title: 'No se pudo agregar',
        icon:'error'
    })}})
   
   
    }

    eliminarProyecto(id:number){
      this.ProyectoService.borrarProyectos(id).subscribe((r)=>
      Swal.fire({
        title: 'Eliminado con éxito',
        icon:'success'
    }).then((r)=> window.location.reload()))
    }

    editarProyecto(id:number, data:Proyecto){
      this.ProyectoService.editarProyectos(id, data).subscribe((r)=>
      Swal.fire({
        title: 'Editado con éxito',
        icon:'success'
    }).then((r)=> window.location.reload()))
    }

}
