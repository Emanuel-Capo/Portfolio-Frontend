import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  events!: any[];
    
    ngOnInit() {
        this.events = [
            {inicio: 'Desde: 15/10/2020', fin: 'Hasta: 30/05/2021', exp:'Experiencia 1'},
            {inicio: 'Desde: 15/10/2020', fin: 'Hasta: 30/05/2021', exp:'Experiencia 2'},
            {inicio: 'Desde: 15/10/2020', fin: 'Hasta: 30/05/2021', exp:'Experiencia 3'},
            {inicio: 'Desde: 16/10/2020', fin: 'Hasta: 30/05/2021', exp:'Experiencia 4'}
        ];
    }

}
