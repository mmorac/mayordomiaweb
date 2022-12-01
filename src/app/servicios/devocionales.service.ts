import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DevocionalesService {

  constructor(private http:HttpClient) { }

  getDevocional(url:string):Observable<Devocional>{   
    return this.http.get<Devocional>(url);
  }

  getDevocionales(url:string):Observable<Devocional[]>{
    return this.http.get<Devocional[]>(url);
  }

}

export class Devocional{
  id:number = 0;
  dia:number = 0;
  semana:number = 0;
  texto:string = "";
}
