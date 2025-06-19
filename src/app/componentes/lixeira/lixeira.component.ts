import { Component, OnInit} from '@angular/core';

import { Todo } from '../todo/models/todo.model';
import { ServiceService } from 'src/app/service.service';
import { TodoComponent } from '../todo/todo.component';



@Component({
  selector: 'app-lixeira',
  templateUrl: './lixeira.component.html',
  styleUrls: ['./lixeira.component.css']
})
export class LixeiraComponent implements OnInit {
  dadosLixeira:Todo[]= [] 
 /*  constructor(private serviceLixeira: ServiceService) { } */

  ngOnInit(): void {
    /* this.serviceLixeira.dadosAtuais.subscribe(dados=>this.dadosLixeira = dados) */

    
  }

}
