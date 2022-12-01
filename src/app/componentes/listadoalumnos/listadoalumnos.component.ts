import { Component, OnInit } from '@angular/core';
import { Alumno, AlumnosService } from 'src/app/servicios/alumnos.service';

@Component({
  selector: 'app-listadoalumnos',
  templateUrl: './listadoalumnos.component.html',
  styleUrls: ['./listadoalumnos.component.css']
})
export class ListadoalumnosComponent implements OnInit {

  alumnos:Alumno[] = [];
  url:string = "https://localhost:7271/mayordomia/Alumno/Alumnos";
  constructor(private alumnosService:AlumnosService) { }

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

  obtenerAlumnos(){
    this.alumnosService.getAlumnos(this.url).subscribe(data =>{
      this.alumnos = data;
      console.log(this.alumnos);
    })
  }
}
