import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Habilidades } from '../habilidades';

@Component({
  selector: 'app-agregar-hab',
  templateUrl: './agregar-hab.component.html',
  styleUrls: ['./agregar-hab.component.css']
})
export class AgregarHabComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
      habilidad:"HTML",
      porcentaje:75,
      iconVB:"0 0 384 512",
      iconPath:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"      
    
   })
  
  nuevo:Habilidades={
    habilidad:'',
    porcentaje:0,
    iconVB:'',
    iconPath:'',
  }
  
  @Output() onHabilidades:EventEmitter<Habilidades>=new EventEmitter()
  
  
    constructor(private fb:FormBuilder) { }
  
    ngOnInit(): void {
    }
  
  guardar(){
    this.nuevo.habilidad=this.miFormulario.value.habilidad
    this.nuevo.porcentaje=this.miFormulario.value.porcentaje
    this.nuevo.iconVB=this.miFormulario.value.iconVB
    this.nuevo.iconPath=this.miFormulario.value.iconPath
    this.onHabilidades.emit(this.nuevo)
  }
  

}
