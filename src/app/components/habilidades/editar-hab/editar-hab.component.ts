import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Habilidades } from '../habilidades';

@Component({
  selector: 'app-editar-hab',
  templateUrl: './editar-hab.component.html',
  styleUrls: ['./editar-hab.component.css']
})
export class EditarHabComponent implements OnInit, OnChanges {

  
  ngOnChanges(changes: SimpleChanges): void {
    let change=changes['habilidades'].currentValue
    this.miFormulario.reset({
    habilidad     :change.habilidad,
    porcentaje     :change.porcentaje,
    iconVB:change.iconVB,
    iconPath   :change.iconPath
  })
  }



  @Input() habilidades:Habilidades={
    habilidad:'',
    porcentaje:0,
    iconVB:'',
    iconPath:'',
  }
  editado:Habilidades={
    habilidad:'',
    porcentaje:0,
    iconVB:'',
    iconPath:'',
  } 
  
  
 @Output() onEditado=new EventEmitter<Habilidades>()
  
  
    constructor(private fb:FormBuilder) { }

miFormulario:FormGroup= this.fb.group({
  habilidad:'',
  porcentaje:0,
  iconVB:'',
  iconPath:'',
})

ngOnInit(): void {
    }
  
  guardar(){
    this.editado.habilidad=this.miFormulario.value.habilidad
    this.editado.porcentaje=this.miFormulario.value.porcentaje
    this.editado.iconVB=this.miFormulario.value.iconVB
    this.editado.iconPath=this.miFormulario.value.iconPath
    this.onEditado.emit(this.editado)
    console.log(this.editado)
  }

 

}
