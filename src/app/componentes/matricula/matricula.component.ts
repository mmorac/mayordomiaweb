import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  especificar_iglesia:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
