import { Component, OnInit } from '@angular/core';
import { Alumno, AlumnosService } from 'src/app/servicios/alumnos.service';
import { Grupo, GruposService } from 'src/app/servicios/grupos.service';

@Component({
  selector: 'app-listadoalumnos',
  templateUrl: './listadoalumnos.component.html',
  styleUrls: ['./listadoalumnos.component.css']
})
export class ListadoalumnosComponent implements OnInit {

  alumnos:Alumno[] = [];
  grupos:Grupo[] = [];

  url:string = "https://localhost:7271/mayordomia/Alumno/Alumnos";
  url_grupos:string = "https://localhost:7271/mayordomia/Grupo/Grupos"
  constructor(private alumnosService:AlumnosService, private gruposService:GruposService) { }

  ngOnInit(): void {
    this.obtenerAlumnos();
    this.obtenerGrupos();
  }


  obtenerGrupos(){
    this.gruposService.getGrupos(this.url_grupos).subscribe(data =>{
      this.grupos = data;
    })
  }
  obtenerAlumnos(){
    this.alumnosService.getAlumnos(this.url).subscribe(data =>{
      this.alumnos = data;
    })
  }
}
