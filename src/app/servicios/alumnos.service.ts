import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {


  constructor(private http:HttpClient) { }

  getAlumno(url:string):Observable<Alumno>{   
    return this.http.get<Alumno>(url);
  }

  postAlumno(alumno:Alumno, url:string):void{   
    this.http.post<any>(url, alumno);
  }

}

export class Alumno{
  //Clase que determina a los alumnos
}