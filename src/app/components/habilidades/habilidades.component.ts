import { Component} from '@angular/core';
import { Habilidades } from './habilidades';
import { HabilidadesService } from './habilidades.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent{

  habilidades:Habilidades[]=[
    {
      id:0,
      habilidad:"HTML",
      porcentaje:75,
      iconVB:"0 0 384 512",
      iconPath:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"      
    },
    {
      id:1,
      habilidad:"CSS",
      porcentaje:60,
      iconVB:"0 0 384 512",
      iconPath:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"      
    }
  ]

  habilidad!:Habilidades;
  habilActual!:Habilidades;

  habilidadActual(hab:Habilidades){
    this.habilActual=hab
  }

  constructor(private habilidadService:HabilidadesService){}
  
  ngOnInit() {
      this.obtenerHabilidadess()            
    }

    obtenerHabilidadess(){
      this.habilidadService.obtenerHabilidades().subscribe(data=>(this.habilidades=data))
    }    
   


   agregarHabilidades(data:Habilidades){
      this.habilidadService.agregarHabilidades(data).subscribe({
        next:(r)=>(Swal.fire({
          title: 'Agregado con éxito',
          icon:'success'
      }).then((r)=> window.location.reload()) ),
      error:(e)=>{Swal.fire({
        title: 'No se pudo agregar',
        icon:'error'
    })}})
   
   
    }

    eliminarHabilidades(id:number){
      this.habilidadService.borrarHabilidades(id).subscribe((r)=>
      Swal.fire({
        title: 'Eliminado con éxito',
        icon:'success'
    }).then((r)=> window.location.reload()))
    }

    editarHabilidades(id:number, data:Habilidades){
      this.habilidadService.editarHabilidades(id, data).subscribe((r)=>
      Swal.fire({
        title: 'Editado con éxito',
        icon:'success'
    }).then((r)=> window.location.reload()))
    }
}

