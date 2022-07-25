import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { HeaderComponent } from './header/header.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FooterComponent } from './footer/footer.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { MenuComponent } from './menu/menu.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AgregarExpComponent } from './experiencia/agregar/agregar.component';
import { EditarExpComponent } from './experiencia/editar/editar.component';
import { AgregarEduComponent } from './educacion/agregar/agregar.component';
import { EditarEduComponent } from './educacion/editar/editar.component';
import { AgregarHabComponent } from './habilidades/agregar-hab/agregar-hab.component';
import { EditarHabComponent } from './habilidades/editar-hab/editar-hab.component';
import { EditarProyComponent } from './proyectos/editar-proy/editar-proy.component';
import { AgregarProyComponent } from './proyectos/agregar-proy/agregar-proy.component';


@NgModule({
  declarations: [
    AcercaComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    HabilidadesComponent,
    HeaderComponent,
    MenuComponent,
    ProyectosComponent,
    AgregarExpComponent,
    EditarExpComponent,
    AgregarEduComponent,
    EditarEduComponent,
    AgregarHabComponent,
    EditarHabComponent,
    EditarProyComponent,
    AgregarProyComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
HttpClientModule,
ReactiveFormsModule,
SweetAlert2Module
  ],
  exports:[
    AcercaComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    HabilidadesComponent,
    HeaderComponent,
    MenuComponent,
    ProyectosComponent,
    BrowserAnimationsModule
  ]
})
export class ComponentsModule { }
