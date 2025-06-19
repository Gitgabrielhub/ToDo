import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './componentes/todo/todo.component';
import { FormsModule,  } from '@angular/forms';
import { LixeiraComponent } from './componentes/lixeira/lixeira.component';
<<<<<<< HEAD
import { DashComponent } from './componentes/dash/dash.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
=======
import { TimerComponent } from './componentes/timer/timer.component';
>>>>>>> 78d7bfa84b827cb0d46778f7d5d4aac05f551299





@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LixeiraComponent,
<<<<<<< HEAD
    DashComponent,
    CardsComponent,
    NavBarComponent
=======
    TimerComponent
>>>>>>> 78d7bfa84b827cb0d46778f7d5d4aac05f551299
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
