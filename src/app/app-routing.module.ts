import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MatriculaComponent } from './componentes/matricula/matricula.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'matricula', component:MatriculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
