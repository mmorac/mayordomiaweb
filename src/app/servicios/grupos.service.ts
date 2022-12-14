import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(private http:HttpClient) { }

  getGrupos(url:string):Observable<Grupo[]>{
    return this.http.get<Grupo[]>(url);
  }

}

export class Grupo{
  id:number = 0;
  dia:string = "";
  hora:string = "";
  modalidad:string = "";
  facilitador1:string = "";
  facilitador2:string = "";
  facilitador3:string = "";
  fecha_inicio:Date = new Date();
}