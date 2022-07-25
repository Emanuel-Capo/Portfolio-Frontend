import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Educacion } from '../educacion';

@Component({
  selector: 'app-editar-edu',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarEduComponent implements OnInit {

  
  ngOnChanges(changes: SimpleChanges): void {
    let change=changes['educacion'].currentValue
    this.miFormulario.reset({
    titulo     :change.titulo,
    academia   :change.academia,
    fecha_fin  :change.fecha_fin,
  })
  }

  @Input() educacion:Educacion={
    titulo     :"",
    academia   :"",
    fecha_fin  :"",
  }
  editado:Educacion={
    titulo     :"",
    academia   :"",
    fecha_fin  :"",
  }

  
  
 @Output() onEditado=new EventEmitter<Educacion>()
  
  
    constructor(private fb:FormBuilder) { }

miFormulario:FormGroup= this.fb.group({
  titulo     :[],
  academia   :[],
  fecha_fin  :[],
})

ngOnInit(): void {
    }
  
  guardar(){
    this.editado.titulo=this.miFormulario.value.titulo
    this.editado.academia=this.miFormulario.value.academia
    this.editado.fecha_fin=this.miFormulario.value.fecha_fin
    this.onEditado.emit(this.editado)
  }

 

}
