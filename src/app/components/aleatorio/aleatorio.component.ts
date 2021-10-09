import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.css']
})
export class AleatorioComponent implements OnInit {

  // Propiedad
  aleatorio:Number = Math.floor(Math.random() * 100)

  constructor() { }

  ngOnInit(): void {
  }

}
