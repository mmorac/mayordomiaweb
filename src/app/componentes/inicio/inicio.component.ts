import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre_usuario:string = "";
  mensaje_de_error:string = "";
  usuario: Usuario = new Usuario();

  constructor() { }

  ngOnInit(): void {
  }

  obtenerUsuario(correo:string){
    
      return fetch('http://www.mayordomiafinanciera.somee.com/mayordomia/Usuario?parametro=' + correo)
              .then(res => res.json())
              .then(res => {
                this.usuario = res;
                if(this.usuario.nombre_usuario === null){
                  this.mensaje_de_error = "Usuario no encontrado";
                }
              })
  }
}

export class Usuario{
  nombre_usuario:string = "";
  nombre:string = "";
  apellidos:string = "";
  rol:string = "";
  correo: string = "";

  Usuario(){
    this.nombre_usuario = "";
    this.nombre = "";
    this.apellidos = "";
    this.rol = "";
  }
}