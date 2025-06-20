import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo.model';
import { ServiceService } from 'src/app/service.service';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todos:Todo[]=[];
  public lixeira:Todo[]=[];
  public tarefasFinalizadas:Todo[]=[];
  public tarefasFazendo:Todo[]=[];
  public campoVazio:boolean = false; 
  
  id:number = 1;
  nome:string = '';
  titulo:string = '';
  done:boolean = false;
  descricaco:string = '';
  dataAtendimento:string = ''
  
  constructor(private serviceLixeira: ServiceService) {}
  ngOnInit(): void {
    this.timer()
  }

  timer(){
    const time = new Date()
    console.log(time)
  }
  excluir(item:Todo){
    const index = this.todos.indexOf(item);
    if(index !== -1){
      this.todos.splice(index,1);
      this.lixeira.push(item);
      this.serviceLixeira.pegarDado(this.lixeira)
      console.log(this.lixeira) 
    }

  }
  finalizarTarefa(item:Todo){
    const index = this.todos.indexOf(item);
    item.done = true;
    
    if(this.tarefasFinalizadas.includes(item)){
      alert('Essa atividade já existe')
    }else{
      if(index !== -1 || item.done === true){
        this.tarefasFazendo.splice(index,1)
        this.tarefasFinalizadas.push(item)
        const date = new Date();
        const tempo = `${date.getHours() }:${date.getMinutes()}:${date.getSeconds()}`
        console.log(tempo)
      }
    }
  }
  campo(){
    if(this.titulo === ''){
      this.campoVazio = !this.campoVazio
      this.campoVazio = this.campoVazio

    }
  }
  inserirTarefa(){
      this.todos.push(new Todo(this.id,this.nome, this.titulo,this.done,this.descricaco));
      this.titulo = '';
      this.id= this.id += 1;
      this.descricaco = '';
      
      this.todos.forEach(todo =>{
        if(todo.titulo === this.titulo && todo.id !== todo.id){
          alert('essa tarefa ja foi cadastrada')
        }
      }) 
      this.save();
  }
  sendoFeitas(item:Todo){
    const index = this.todos.indexOf(item);
    if(index !== -1){
      this.todos.splice(index,1);
      this.tarefasFazendo.push(item);
      console.log(this.tarefasFazendo)
    }
    this.timer();
  }
  save(){
    const data = JSON.stringify(this.todos)
    localStorage.setItem('todos', data)
  } 
}
