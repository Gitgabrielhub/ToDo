import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
<<<<<<< HEAD
import { Todo } from './componentes/todo/models/todo.model';
=======
import { Todo } from './models/todo.model';
>>>>>>> 78d7bfa84b827cb0d46778f7d5d4aac05f551299



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private dadosLixeira = new BehaviorSubject<any>('indio');
  dadosAtuais = this.dadosLixeira.asObservable();

  pegarDado(dadosLixeira:any[]){
    this.dadosLixeira.next(dadosLixeira)
  }

  constructor() { }
}
