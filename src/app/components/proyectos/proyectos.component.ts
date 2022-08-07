import { Component, OnInit } from '@angular/core';
import { Proyecto } from './proyectos';
import { ProyectosService } from './proyectos.service';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup } from '@angular/forms';

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
  proyecto:Proyecto={
    nombre:'',
    descripcion:'',
    link:'',
    img:''
  };
  proyActual!:Proyecto;

  miFormulario:FormGroup=this.fb.group({
    nombre:'',
    descripcion:'',
    link:'',
    img:''
  })

  editMode:boolean=true
  dataOK:boolean=false
  
  constructor(private ProyectoService:ProyectosService,
    private fb:FormBuilder){}
  
  ngOnInit() {
      this.obtenerProyectos()            
    }

    obtenerProyectos(){
      this.ProyectoService.obtenerProyectos().subscribe(data=>{
        this.proyectos=data
        this.dataOK=true})
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

    validado():boolean{
      return (sessionStorage.getItem('token')!==null)
    }

    reset(){
      this.miFormulario.reset()
    }

    proyectoActual(proy:Proyecto){
      this.editMode=true
      this.proyActual=proy
      this.miFormulario.reset({
        nombre:this.proyActual.nombre,
        descripcion:this.proyActual.descripcion,
        link:this.proyActual.link,
        img:this.proyActual.img
      })
    }

    save(){
      this.proyecto.nombre=this.miFormulario.value.nombre
      this.proyecto.descripcion=this.miFormulario.value.descripcion
      this.proyecto.link=this.miFormulario.value.link
      this.proyecto.img=this.miFormulario.value.img
    }

    guardar(){
      this.save()
      if(this.editMode) {this.editarProyecto(this.proyActual.id!,this.proyecto)}
      else {this.agregarProyecto(this.proyecto)}
    }

    addMode(){
      this.miFormulario.reset()
      this.editMode=false
    }
  }
  