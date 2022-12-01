import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevocionalesComponent } from './componentes/devocionales/devocionales.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListadoalumnosComponent } from './componentes/listadoalumnos/listadoalumnos.component';
import { MatriculaComponent } from './componentes/matricula/matricula.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'matricula', component:MatriculaComponent},
  {path:'listadoalumnos', component:ListadoalumnosComponent},
  {path:'devocionales', component:DevocionalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
