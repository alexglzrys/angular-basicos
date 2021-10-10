import { Component, OnInit } from '@angular/core';
import { LibrosSeleccionadosService } from '../../services/libros-seleccionados.service';

interface Libro {
  id: number
  title: string
  description: string
  author: string
  image: string
  url: string
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  librosAgregados: Array<Libro> = []
  mostrarLista: boolean = false

  constructor(private librosSeleccionadosService:LibrosSeleccionadosService) { }

  ngOnInit(): void {
    this.mostrarLibros()
  }

  mostrarLibros()
  {
    this.librosAgregados = this.librosSeleccionadosService.mostrarLibros()
  }

}
