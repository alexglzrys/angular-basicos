import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  visibleA: boolean = true
  visibleB: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
