import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Proyecto } from '../proyectos';

@Component({
  selector: 'app-editar-proy',
  templateUrl: './editar-proy.component.html',
  styleUrls: ['./editar-proy.component.css']
})
export class EditarProyComponent implements OnChanges {

  
  ngOnChanges(changes: SimpleChanges): void {
    let change=changes['proyecto'].currentValue
    this.miFormulario.reset({
    nombre      :change.nombre,
    link        :change.link,
    img         :change.img,
    descripcion :change.descripcion,
  })
  }

  @Input() proyecto:Proyecto={
    nombre:'',
    link:'',
    img:'',
    descripcion:''
  }
  editado:Proyecto={
    nombre:'',
    link:'',
    img:'',
    descripcion:''
  } 
    
 @Output() onEditado=new EventEmitter<Proyecto>()
    
    constructor(private fb:FormBuilder) { }

miFormulario:FormGroup= this.fb.group({
  nombre:'',
    link:'',
    img:'',
    descripcion:''
})

  
  guardar(){
    this.editado.nombre=this.miFormulario.value.nombre
    this.editado.link=this.miFormulario.value.link
    this.editado.img=this.miFormulario.value.img
    this.editado.descripcion=this.miFormulario.value.descripcion
    this.onEditado.emit(this.editado)
  }
}
