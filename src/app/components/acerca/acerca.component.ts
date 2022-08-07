import { Component, OnInit } from '@angular/core';
import { PersonaServiceService } from './persona-service.service';
import { Persona } from './persona';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  persona:Persona={
    acerca:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quaerat reiciendis. Vitae, blanditiis pariatur, aliquid voluptatum magnam inventore repellendus mollitia explicabo voluptates doloribus corrupti distinctio nihil officiis dolores impedit enim? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo omnis voluptatem adipisci ab ut sit iure quas, eius expedita numquam earum quasi sapiente facilis fuga? Accusamus et minus reprehenderit reiciendis!',
    img:'./assets/no-image.png'
  }

  miFormulario:FormGroup=this.fb.group({
    acerca:'',
    img:''
  })

  dataOK:boolean=false

  constructor(private personaService:PersonaServiceService, 
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.obtenerPersona()
  }

  obtenerPersona(){
    this.personaService.obtenerPersona().subscribe(data=>{
      this.persona=data
      this.dataOK=true
    })
  }

  editarPersona(persona:Persona){
    this.personaService.editarPersona(persona).subscribe((r)=>
    Swal.fire({
      title: 'Editado con éxito',
      icon:'success'
  }))
  }

  form(){
    this.miFormulario.reset({
      acerca:this.persona.acerca,
      img:this.persona.img
    })
  }

  save(){
    this.persona.acerca=this.miFormulario.value.acerca
    this.persona.img=this.miFormulario.value.img
  }

  editar(){
    this.save()
    this.editarPersona(this.persona)
  }

  validado():boolean{
    return (sessionStorage.getItem('token')!==null)
  }
}
