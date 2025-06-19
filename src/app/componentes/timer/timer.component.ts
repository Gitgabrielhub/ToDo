import { Component, OnInit } from '@angular/core';
import { interval,Subscription } from 'rxjs';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  seconds:number = 0;
  minutes:any = 0;
  runningTime: boolean = false;
  numberzero = 0;

  iniciar(){
      setInterval(()=>{
        this.runningTime = true
        this.seconds++;
        if(this.seconds === 60){
          this.minutes++
          this.seconds = 0;
        }
      },1000)
  }
  pausar(){

    if(this.runningTime){
      clearInterval(this.minutes)
      this.runningTime;
    }
  }
  clear(){
    this.seconds = 0;
    this.minutes = 0;
    this.runningTime = false;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
