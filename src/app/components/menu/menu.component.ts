import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[]=[];

  ngOnInit() {
    this.items = [
        {
            label: 'Acerca de...',
            url: '#acerca',
            target: '_self'
        },
        {
            label: 'Experiencia',
            url: '#experiencia',
            target: '_self'
            
        },
        {
            label: 'Educación',
            url: '#educacion',
            target: '_self'
        },
        {
            label: 'Habilidades',
            url: '#skills',
            target: '_self'
        },
        {
            label: 'Proyectos',
            url: '#proyectos',
            target: '_self'
        }
    ];
}


salir(){
    sessionStorage.clear()
    Swal.fire({
      title: 'Saliste del modo Edición',
      icon:'success'
    })
  }

  validado():boolean{
    return (sessionStorage.getItem('token')!==null)
  }
}
