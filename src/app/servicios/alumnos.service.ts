import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json;charset=UTF-8'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  url_principal:string = "https://localhost:7271/mayordomia/Alumno/";
  constructor(private http:HttpClient) { }

  getAlumnos(url:string):Observable<Alumno[]>{
    return this.http.get<Alumno[]>(url);
  }

  getAlumno(url:string):Observable<Alumno>{   
    return this.http.get<Alumno>(url);
  }

  postAlumno(alumno:Alumno, url:string):Observable<any>{
    let url_final = this.url_principal + url;
    console.log(alumno);
    return this.http.post<any>(url_final, alumno, httpOptions);
  }

}

export class Alumno{
  //Clase que determina a los alumnos
  id:number = 0;
  nombre:string = "";
  apellidos:string = "";
  rango_edad:string = "";
  estado_civil:string = "";
  telefono:number = 0;
  correo:string = "";
  disponibilidad:string = "";
  modalidad:string = "";
  compromiso_curso:number = 0;
  necesita_beca:number = 0;
  compromiso_beca:number = 0;
  vanc:number = 0;
  otra_iglesia:string = "";
  servidor_vanc:number = 0;
  ministerio_vanc:string = "";
  fuente_mtf:string = "";
  comentarios:string = "";
  grupo:string = "";
}