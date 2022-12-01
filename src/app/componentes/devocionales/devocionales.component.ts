import { Component, OnInit } from '@angular/core';
import { Devocional, DevocionalesService } from 'src/app/servicios/devocionales.service';

@Component({
  selector: 'app-devocionales',
  templateUrl: './devocionales.component.html',
  styleUrls: ['./devocionales.component.css']
})
export class DevocionalesComponent implements OnInit {

  url_principal:string = "https://localhost:7271/mayordomia/Devocional/";

  devocionales:Devocional[] = [];

  constructor(private devocionalesService:DevocionalesService) { }

  ngOnInit(): void {
    this.getDevocionales();
  }

  getDevocionales(){
    this.devocionalesService.getDevocionales(this.url_principal + "Devocionales/2").subscribe(data =>{
      this.devocionales = data;
      for(let item of this.devocionales){
        item.texto = item.texto.replace("<versiculo>", "<i>");
        item.texto = item.texto.replace("</versiculo>", "</i>");
        item.texto = item.texto.replace("#", "\n");
      }
    })
  }
}
