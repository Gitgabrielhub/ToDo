import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LixeiraComponent } from './componentes/lixeira/lixeira.component';
import { TodoComponent } from './componentes/todo/todo.component';
import { TimerComponent } from './componentes/timer/timer.component';




const routes: Routes = [
  {
    path:'todo', component:TodoComponent
  },
  {
    path: 'lixeira', component:LixeiraComponent
  },
  {
    path:'timer', component:TimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
