import { Injectable } from '@angular/core';

interface Libro {
  id: number
  title: string
  description: string
  author: string
  image: string
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class LibrosSeleccionadosService {

  libros: Array<Libro> = []

  // Los servicios me permiten compartir información con todas las partes de mi aplicación. No se requiere un store
  constructor() { }

  agregarLibro(libro: Libro)
  {
    this.libros.push(libro)
  }

  mostrarLibros(): Array<Libro>
  {
    return this.libros
  }

}
