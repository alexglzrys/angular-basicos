import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { HomeComponent } from './home/home.component';
import { LibrosComponent } from './libros/libros.component';
import { AleatorioComponent } from '../components/aleatorio/aleatorio.component';
import { ColoresComponent } from '../components/colores/colores.component';
import { InformacionComponent } from '../components/informacion/informacion.component';
import { OpcionesComponent } from '../components/opciones/opciones.component';
import { EstilosComponent } from '../components/estilos/estilos.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { DetallesComponent } from './detalles/detalles.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    LibrosComponent,
    AcercaDeComponent,
    AleatorioComponent,
    ColoresComponent,
    InformacionComponent,
    OpcionesComponent,
    EstilosComponent,
    ErrorComponent,
    DetallesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,  // Necesaria para trabajar con ngModel
    RouterModule,
  ]
})
export class PagesModule { }
