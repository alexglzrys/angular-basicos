import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {
  color:string = '';

  constructor() {}

  ngOnInit(): void {
    this.colorHex()
  }

  // Métodos
  generarRandom(): string {
    return Math.floor(Math.random() * 255).toString(16)
  }

  colorHex() {
    this.color = `#${this.generarRandom()}${this.generarRandom()}${this.generarRandom()}`;
  }

}
