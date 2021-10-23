import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  // Acceder a un elemento de la vista, mediante su referencia
  @ViewChild('miBoton', {static: false}) botonViajar!: ElementRef;

  paises: Array<Object>;
  // Esta variable si o si tendrá en su momento un elemento HTML
  elementoAnterior!: HTMLElement;

  // La clase Renderer2 permite hacer referencia al elemento nativo, en este caso HTML y manipularlo dinámicamente como se haría con JS
  constructor(private render: Renderer2) { 
    this.paises = [
      {id: 1, nombre: "México"},
      {id: 2, nombre: "Estados Unidos"},
      {id: 3, nombre: "Colombia"},
      {id: 4, nombre: "España"}
    ]
  }

  ngOnInit(): void {
  }

  // Recibe una referencia del elemento donde se hizo clic
  // Podemos manipular el elemento a nuestro antojo pero con base a los estandares de angular
  mostrarActivo(elemento: HTMLElement) {
    if (this.elementoAnterior) {
      this.render.removeClass(this.elementoAnterior, 'destacado')
    }
    this.render.addClass(elemento, "destacado");
    this.render.setAttribute(elemento, 'data-seleccionado', 'true');

    let nuevoElemento = this.render.createElement('span');
    this.render.setProperty(nuevoElemento, 'innerHTML', '👻');
    this.render.appendChild(elemento, nuevoElemento)

    this.render.setProperty(this.botonViajar.nativeElement, 'innerHTML', 'Ya puedes viajar 🚁')
    this.render.removeAttribute(this.botonViajar.nativeElement, 'disabled')
    
    this.elementoAnterior = elemento
  }

}
