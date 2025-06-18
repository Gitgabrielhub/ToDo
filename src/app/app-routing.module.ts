import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LixeiraComponent } from './componentes/lixeira/lixeira.component';
import { DashComponent } from './componentes/dash/dash.component';
import { TodoComponent } from './componentes/todo/todo.component';



const routes: Routes = [
  {
    path:'todo', component:TodoComponent
  },
  {
    path:'', component:TodoComponent
  },
  {
    path: 'lixeira', component:LixeiraComponent
  },
  {
    path:'dasboard', component:DashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
