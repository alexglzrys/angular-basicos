import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AleatorioComponent } from './components/aleatorio/aleatorio.component';
import { ColoresComponent } from './components/colores/colores.component';

@NgModule({
  declarations: [
    AppComponent,
    AleatorioComponent,
    ColoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
