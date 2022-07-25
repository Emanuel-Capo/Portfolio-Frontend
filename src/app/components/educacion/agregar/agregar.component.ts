import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Educacion } from '../educacion';

@Component({
  selector: 'app-agregar-edu',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarEduComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    titulo     :["Titulo"],
    academia     :["Lugar de estudio"],
    fecha_fin   :[]
  })
  
  nuevo:Educacion={
    titulo     :"",
    academia   :"",
    fecha_fin  :""
  }
  
  @Output() onEducacion:EventEmitter<Educacion>=new EventEmitter()
  
  
    constructor(private fb:FormBuilder) { }
  
    ngOnInit(): void {
    }
  
  guardar(){
    this.nuevo.titulo=this.miFormulario.value.titulo
    this.nuevo.academia=this.miFormulario.value.academia
    this.nuevo.fecha_fin=this.miFormulario.value.fecha_fin
    this.onEducacion.emit(this.nuevo)
  }

}
