import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './models/todo.model';



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
