import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AleatorioComponent } from './components/aleatorio/aleatorio.component';
import { ColoresComponent } from './components/colores/colores.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { OpcionesComponent } from './components/opciones/opciones.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AleatorioComponent,
    ColoresComponent,
    InformacionComponent,
    OpcionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Necesaria para trabajar con ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
