import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from './experiencia.service';
import { Experiencia } from './experiencia';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup } from '@angular/forms';

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
    descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum assumenda molestias voluptatibus sequi ea eligendi illo tempore excepturi facilis inventore totam, eum quasi voluptas sunt consequuntur, dolorem dolor pariatur!",
    img: "assets/clases.jpg"
  }];
  experiencia:Experiencia={
    trabajo     :'',
    empresa     :'',
    fecha_inicio:'',
    fecha_fin   :'',
    descripcion :'',
    img         :''
  };
  experActual!:Experiencia;

  miFormulario:FormGroup = this.fb.group({
    trabajo     :'',
    empresa     :'',
    fecha_inicio:'',
    fecha_fin   :'',
    descripcion :'',
    img         :''
  })

  editMode:boolean=true
  dataOK:boolean=false
  
  constructor(private experienciaService:ExperienciaService,
    private fb:FormBuilder){}
    
    ngOnInit() {
      this.obtenerExperiencias()            
    }
    
    obtenerExperiencias(){
      this.experienciaService.obtenerExperiencia().subscribe(data=>{
        (this.experiencias=data)
        this.dataOK=true
      })
    }    
       
    
    agregarExperiencia(data:Experiencia){
      this.experienciaService.agregarExperiencia(data).subscribe({
        next:(r)=>(Swal.fire({
          title: 'Agregado con éxito',
          icon:'success'
        }).then((r)=> window.location.reload())),
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
      
      
      validado():boolean{
        return (sessionStorage.getItem('token')!==null)
      }

      reset(){
        this.miFormulario.reset()
      }
      
      experienciaActual(exp:Experiencia){
        this.editMode=true
        this.experActual=exp
        this.miFormulario.reset({
          trabajo     :this.experActual.trabajo,
          empresa     :this.experActual.empresa,
          fecha_inicio:this.experActual.fecha_inicio,
          fecha_fin   :this.experActual.fecha_fin,
          descripcion :this.experActual.descripcion,
          img         :this.experActual.img
        })
      }

      save(){
        this.experiencia.trabajo=this.miFormulario.value.trabajo
        this.experiencia.empresa=this.miFormulario.value.empresa
        this.experiencia.fecha_inicio=this.miFormulario.value.fecha_inicio
        this.experiencia.fecha_fin=this.miFormulario.value.fecha_fin
        this.experiencia.descripcion=this.miFormulario.value.descripcion
        this.experiencia.img=this.miFormulario.value.img
      }

      guardar(){
        this.save()
        if (this.editMode){this.editarExperiencia(this.experActual.id!,this.experiencia)}        
        else {this.agregarExperiencia(this.experiencia)}
      }
  

      addMode(){
        this.miFormulario.reset()
        this.editMode=false
      }
    }

