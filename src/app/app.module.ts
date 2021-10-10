import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PagesModule } from './pages/pages.module';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './pages/error/error.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

// Definición del sistema de rutas principal
const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'acerca-de', component: AcercaDeComponent},
  {path: 'libros', component: LibrosComponent},
  {path: 'detalles/:libroId', component: DetallesComponent},
  {path: '404', component: ErrorComponent},
  {path: '**', redirectTo: '404'}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    PagesModule,
    BrowserModule,
    RouterModule.forRoot(routes), // Registrar las rutas de la aplicación
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
