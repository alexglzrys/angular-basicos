import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

interface Libro {
  id: number
  title: string
  description: string
  author: string
  image: string
  url: string
}

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  libros: Array<Libro> = []
  libroId!: Number
  libroSeleccionado!: Libro

  // Obtener información de ruta
  constructor(private router: ActivatedRoute) {
    this.libros = [
      {id: 1, title: 'PHP dede Cero', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, conubia ornare class tincidunt etiam leo senectus, mauris curabitur nunc nostra phasellus a. Nostra velit fames mattis mauris tristique neque dictumst fringilla, sociis convallis id posuere maecenas sodales mus blandit eros, dignissim justo rutrum nullam vulputate pulvinar ut. Ligula accumsan sagittis luctus nec torquent fusce faucibus litora senectus leo, aliquam maecenas potenti natoque eget curabitur bibendum elementum eros taciti mattis, quis quam justo vulputate sem diam cum nulla a.', author: 'Nicolas Mendienta', image: 'https://via.placeholder.com/150', url: 'http://www.libro.com'},
      {id: 2, title: 'Bases de Datos Relacionales', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, conubia ornare class tincidunt etiam leo senectus, mauris curabitur nunc nostra phasellus a. Nostra velit fames mattis mauris tristique neque dictumst fringilla, sociis convallis id posuere maecenas sodales mus blandit eros, dignissim justo rutrum nullam vulputate pulvinar ut. Ligula accumsan sagittis luctus nec torquent fusce faucibus litora senectus leo, aliquam maecenas potenti natoque eget curabitur bibendum elementum eros taciti mattis, quis quam justo vulputate sem diam cum nulla a.', author: 'Mario Molina', image: 'https://via.placeholder.com/150', url: 'http://www.libro.com'},
      {id: 3, title: 'CSS Avanzado', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, conubia ornare class tincidunt etiam leo senectus, mauris curabitur nunc nostra phasellus a. Nostra velit fames mattis mauris tristique neque dictumst fringilla, sociis convallis id posuere maecenas sodales mus blandit eros, dignissim justo rutrum nullam vulputate pulvinar ut. Ligula accumsan sagittis luctus nec torquent fusce faucibus litora senectus leo, aliquam maecenas potenti natoque eget curabitur bibendum elementum eros taciti mattis, quis quam justo vulputate sem diam cum nulla a.', author: 'Valeria González', image: 'https://via.placeholder.com/150', url: 'http://www.libro.com'},
      {id: 4, title: 'Git', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, conubia ornare class tincidunt etiam leo senectus, mauris curabitur nunc nostra phasellus a. Nostra velit fames mattis mauris tristique neque dictumst fringilla, sociis convallis id posuere maecenas sodales mus blandit eros, dignissim justo rutrum nullam vulputate pulvinar ut. Ligula accumsan sagittis luctus nec torquent fusce faucibus litora senectus leo, aliquam maecenas potenti natoque eget curabitur bibendum elementum eros taciti mattis, quis quam justo vulputate sem diam cum nulla a.', author: 'Santiago Ramírez', image: 'https://via.placeholder.com/150', url: 'http://www.libro.com'},
      {id: 5, title: 'Linux', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, conubia ornare class tincidunt etiam leo senectus, mauris curabitur nunc nostra phasellus a. Nostra velit fames mattis mauris tristique neque dictumst fringilla, sociis convallis id posuere maecenas sodales mus blandit eros, dignissim justo rutrum nullam vulputate pulvinar ut. Ligula accumsan sagittis luctus nec torquent fusce faucibus litora senectus leo, aliquam maecenas potenti natoque eget curabitur bibendum elementum eros taciti mattis, quis quam justo vulputate sem diam cum nulla a.', author: 'Mireya González', image: 'https://via.placeholder.com/150', url: 'http://www.libro.com'}
    ]
  }

  ngOnInit(): void {
    // Obtener el parámetro de ruta
    this.router.params.subscribe(params => {
      this.libroId = params['libroId']
      this.libroSeleccionado = this.encontrarLibro()
    })
  }

  encontrarLibro(): Libro
  {
    return this.libros.filter((libro:Libro) => libro.id == this.libroId)[0]
  }

}
