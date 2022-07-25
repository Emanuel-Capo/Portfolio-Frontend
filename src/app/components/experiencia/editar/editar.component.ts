import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Experiencia } from '../experiencia';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarExpComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    let change=changes['experiencia'].currentValue
    this.miFormulario.reset({
    trabajo     :change.trabajo,
    empresa     :change.empresa,
    fecha_inicio:change.fecha_inicio,
    fecha_fin   :change.fecha_fin,
    descripcion :change.descripcion,
  })
  }



  @Input() experiencia:Experiencia={
    trabajo     :"",
    empresa     :"",
    fecha_inicio:"",
    fecha_fin   :"",
    descripcion :""
  }
  editado:Experiencia={
    trabajo:'',
    empresa:'',
    fecha_inicio:'',
    fecha_fin:'',
    descripcion:''
  }

  
  
  
 @Output() onEditado=new EventEmitter<Experiencia>()
  
  
    constructor(private fb:FormBuilder) { }

miFormulario:FormGroup= this.fb.group({
  trabajo     :[],
  empresa     :[],
  fecha_inicio:[],
  fecha_fin   :[],
  descripcion :[],
})

ngOnInit(): void {
    }
  
  guardar(){
    this.editado.trabajo=this.miFormulario.value.trabajo
    this.editado.empresa=this.miFormulario.value.empresa
    this.editado.fecha_inicio=this.miFormulario.value.fecha_inicio
    this.editado.fecha_fin=this.miFormulario.value.fecha_fin
    this.editado.descripcion=this.miFormulario.value.descripcion
    this.onEditado.emit(this.editado)
    console.log(this.editado)
  }

 


}
