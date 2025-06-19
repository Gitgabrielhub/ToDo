import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LixeiraComponent } from './componentes/lixeira/lixeira.component';
<<<<<<< HEAD
import { DashComponent } from './componentes/dash/dash.component';
import { TodoComponent } from './componentes/todo/todo.component';
=======
import { TodoComponent } from './componentes/todo/todo.component';
import { TimerComponent } from './componentes/timer/timer.component';

>>>>>>> 78d7bfa84b827cb0d46778f7d5d4aac05f551299



const routes: Routes = [
  {
<<<<<<< HEAD
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
=======
    path:'todo', component:TodoComponent,
    children:[
      {
        path: 'lixeira', component:LixeiraComponent
      },
    ]
  },
  {
    path:'', component:TodoComponent, 
  },
  {
    path:'timer', component:TimerComponent
>>>>>>> 78d7bfa84b827cb0d46778f7d5d4aac05f551299
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
