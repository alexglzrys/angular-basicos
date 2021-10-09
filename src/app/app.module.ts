import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AleatorioComponent } from './components/aleatorio/aleatorio.component';
import { ColoresComponent } from './components/colores/colores.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { OpcionesComponent } from './components/opciones/opciones.component';
import { FormsModule } from '@angular/forms';
import { EstilosComponent } from './components/estilos/estilos.component';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    AleatorioComponent,
    ColoresComponent,
    InformacionComponent,
    OpcionesComponent,
    EstilosComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Necesaria para trabajar con ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
