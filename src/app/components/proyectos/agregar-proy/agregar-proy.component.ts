import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Proyecto } from '../proyectos';

@Component({
  selector: 'app-agregar-proy',
  templateUrl: './agregar-proy.component.html',
  styleUrls: ['./agregar-proy.component.css']
})
export class AgregarProyComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    nombre:"Paginas web",
    descripcion:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    link:"",
    img:"assets/pagina.jpg"
  })
  
  nuevo:Proyecto={
    nombre:'',
    link:'',
    img:'',
    descripcion:''
  }
  
  @Output() onProyecto:EventEmitter<Proyecto>=new EventEmitter()
  
  
    constructor(private fb:FormBuilder) { }
  
    ngOnInit(): void {
    }
  
  guardar(){
    this.nuevo.nombre=this.miFormulario.value.nombre
    this.nuevo.link=this.miFormulario.value.link
    this.nuevo.img=this.miFormulario.value.img
    this.nuevo.descripcion=this.miFormulario.value.descripcion
    this.onProyecto.emit(this.nuevo)
  }
  
}
