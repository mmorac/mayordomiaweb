import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/servicios/alumnos.service';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  especificar_iglesia:boolean = false;
  constructor(private servicioAlumnos:AlumnosService) { }

  ngOnInit(): void {
  }

  matricular(apellidos:string, nombre:string, rango_edad:string, estado_civil:string, telefono:string, correo:string,
    disponibilidad:string, modalidad:string, compromiso_curso:boolean, necesita_beca:boolean, compromiso_beca:boolean,
    vanc:boolean, otra_iglesia:string, servidor_vanc:boolean, ministerio_vanc:string, fuente_mtf:string, comentarios:string){
    
    let cc_numerico = compromiso_curso ? 1 : 0;
    let nb_numerico = necesita_beca ? 1 : 0;
    let cb_numerico = compromiso_beca ? 1 : 0;
    let vanc_numerico = vanc ? 1 : 0;
    let sv_numerico = servidor_vanc ? 1 : 0;

    let alumno = {
      "id": 0,
      "apellidos": apellidos,
      "nombre": nombre,
      "rango_edad": rango_edad,
      "estado_civil": estado_civil,
      "telefono": +telefono,
      "correo": correo,
      "disponibilidad": disponibilidad,
      "modalidad": modalidad,
      "compromiso_curso": cc_numerico,
      "necesita_beca": nb_numerico,
      "compromiso_beca": cb_numerico,
      "vanc": vanc_numerico,
      "otra_iglesia": otra_iglesia,
      "servidor_vanc": sv_numerico,
      "ministerio_vanc": ministerio_vanc,
      "fuente_mtf": fuente_mtf,
      "comentarios": comentarios,
      "grupo": ""
    }
    console.log("prueba");
    this.servicioAlumnos.postAlumno(alumno, "").subscribe();
  }
}
