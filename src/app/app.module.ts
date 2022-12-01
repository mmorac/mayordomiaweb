import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DevocionalesComponent } from './componentes/devocionales/devocionales.component';
import { MatriculaComponent } from './componentes/matricula/matricula.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoalumnosComponent } from './componentes/listadoalumnos/listadoalumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    DevocionalesComponent,
    MatriculaComponent,
    ListadoalumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
