import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarpersonaComponent } from './components/persona/listarpersona/listarpersona.component';
import { AppComponent } from './app.component';
import { UpdatepersonaComponent } from './components/persona/updatepersona/updatepersona.component';
import { AddpersonaComponent } from './components/persona/addpersona/addpersona.component';


const routes: Routes = [
  {path: 'listar', component: ListarpersonaComponent},
  {path: 'add/persona', component:AddpersonaComponent},
  {path: 'editar/:id', component:UpdatepersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
