import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './componentes/todo/todo.component';
import { FormsModule,  } from '@angular/forms';
import { LixeiraComponent } from './componentes/lixeira/lixeira.component';
import { DashComponent } from './componentes/dash/dash.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';

import { TimerComponent } from './componentes/timer/timer.component';
import { FooterComponent } from './componentes/footer/footer.component';






@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LixeiraComponent,
    DashComponent,
    CardsComponent,
    NavBarComponent,
    TimerComponent,
    FooterComponent
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
