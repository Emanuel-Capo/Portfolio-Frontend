import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Experiencia } from '../experiencia';

@Component({
  selector: 'app-agregar-exp',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarExpComponent implements OnInit {

miFormulario:FormGroup = this.fb.group({
  trabajo     :["Programador"],
  empresa     :["Google Co."],
  fecha_inicio:[],
  fecha_fin   :[],
  descripcion :["Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor delectus quaerat sequi voluptatibus. Ab non quis, illum asperiores odit ad vitae minus, velit id, voluptatem qui aliquam? Adipisci, quos?"],
})

nuevo:Experiencia={
  trabajo:'',
  empresa:'',
  fecha_inicio:'',
  fecha_fin:'',
  descripcion:''
}

@Output() onExperiencia:EventEmitter<Experiencia>=new EventEmitter()


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

guardar(){
  this.nuevo.trabajo=this.miFormulario.value.trabajo
  this.nuevo.empresa=this.miFormulario.value.empresa
  this.nuevo.fecha_inicio=this.miFormulario.value.fecha_inicio
  this.nuevo.fecha_fin=this.miFormulario.value.fecha_fin
  this.nuevo.descripcion=this.miFormulario.value.descripcion
  this.onExperiencia.emit(this.nuevo)
}

}
