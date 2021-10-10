import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: Array<Libro> = []
  errorHttp: boolean = false
  loading: boolean = true

  // Servicios y cliente http se inyectan en el constructor
  constructor(private librosSeleccionadosService: LibrosSeleccionadosService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarLibros()
  }

  masInformacion(libro:Libro) {
    alert(`Este libro ${libro?.title} es el más vendido, y pertenece al autor ${libro?.author}`)
  }

  agregarLibro(libro: Libro)
  {
    this.librosSeleccionadosService.agregarLibro(libro)
  }

  cargarLibros()
  {
    this.http.get<Libro[]>('assets/json/libros.json').subscribe(libros => {
      this.libros = libros
      this.loading = false
    }, (response) => {
      if (response.status == 404) {
        this.errorHttp = true
      }
    })
  }

}
