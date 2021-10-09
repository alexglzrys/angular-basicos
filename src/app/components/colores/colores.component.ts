import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {
  color:String = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Métodos
  generarRandom(): String {
    return Math.floor(Math.random() * 255).toString(16)
  }

  colorHex():String {
    this.color = `#${this.generarRandom()}${this.generarRandom()}${this.generarRandom()}`;
    return this.color;
  }

}
