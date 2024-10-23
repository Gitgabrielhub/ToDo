import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './componentes/todo/todo.component';
import { FormsModule,  } from '@angular/forms';
import { LixeiraComponent } from './componentes/lixeira/lixeira.component';
import { TimerComponent } from './componentes/timer/timer.component';





@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LixeiraComponent,
    TimerComponent
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
