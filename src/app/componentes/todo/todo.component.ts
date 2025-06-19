import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Todo } from './models/todo.model';
=======
import { Todo } from '../../models/todo.model';
>>>>>>> 78d7bfa84b827cb0d46778f7d5d4aac05f551299
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
  titulo:string = '';
<<<<<<< HEAD
  nome:string = '';
  done:boolean = false;
  descricaco:string = '';
  dataAtendimento:Date = new Date;
  
  constructor(private serviceLixeira: ServiceService) {}
  ngOnInit(): void {
    this.timer();
=======
  done:boolean = false;
  descricaco:string = '';


  constructor(private serviceLixeira: ServiceService) {}
  
  ngOnInit(): void {
>>>>>>> 78d7bfa84b827cb0d46778f7d5d4aac05f551299
  }

  timer(){
    const time = new Date()
<<<<<<< HEAD
    console.log(this.dataAtendimento)
  }
=======
    console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
  }
  
>>>>>>> 78d7bfa84b827cb0d46778f7d5d4aac05f551299
  excluir(item:Todo){
    const index = this.todos.indexOf(item);
    if(index !== -1){
      this.todos.splice(index,1);
      this.lixeira.push(item);
      this.serviceLixeira.pegarDado(this.lixeira)
<<<<<<< HEAD
      console.log(this.lixeira) 
=======
      /* console.log(this.lixeira) */
>>>>>>> 78d7bfa84b827cb0d46778f7d5d4aac05f551299
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
<<<<<<< HEAD
      this.todos.push(new Todo(this.id,this.nome,this.titulo,this.done,this.descricaco));
      this.nome = '';
=======
    
      this.todos.push(new Todo(this.id,this.titulo,this.done,this.descricaco));
>>>>>>> 78d7bfa84b827cb0d46778f7d5d4aac05f551299
      this.titulo = '';
      this.id= this.id += 1;
      this.descricaco = '';
      
      this.todos.forEach(todo =>{
        if(todo.titulo === this.titulo && todo.id !== todo.id){
          alert('essa tarefa ja foi cadastrada')
        }
      }) 
      this.save();
<<<<<<< HEAD
  }
  sendoFeitas(item:Todo){
    const index = this.todos.indexOf(item);
=======
    
  }
  showOptions(event: Event){
    const target = event.target as HTMLButtonElement;
    console.log('valor do botao:: ', target.value)
  }
  sendoFeitas(item:Todo){
    
    const index = this.todos.indexOf(item);

>>>>>>> 78d7bfa84b827cb0d46778f7d5d4aac05f551299
    if(index !== -1){
      this.todos.splice(index,1);
      this.tarefasFazendo.push(item);
      console.log(this.tarefasFazendo)
    }
    this.timer();
<<<<<<< HEAD
  }
=======
    
  }

>>>>>>> 78d7bfa84b827cb0d46778f7d5d4aac05f551299
  save(){
    const data = JSON.stringify(this.todos)
    localStorage.setItem('todos', data)
  }
<<<<<<< HEAD
=======

>>>>>>> 78d7bfa84b827cb0d46778f7d5d4aac05f551299
  /* load(){
    const data = localStorage.getItem();
    this.todos = JSON.parse(data);
  }  */
  
<<<<<<< HEAD
=======


>>>>>>> 78d7bfa84b827cb0d46778f7d5d4aac05f551299
}
