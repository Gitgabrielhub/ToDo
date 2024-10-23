import { Component, OnInit } from '@angular/core';
import { interval,Subscription } from 'rxjs';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    public time:number = 0;
    public minutes = 0;
    private subscription!: Subscription;
    public runningTime: boolean = false;

    start(){
      if(!this.runningTime){
        const timer = interval(10);
        this.subscription = timer.subscribe(()=>{
          this.time++;
        })
        //this.runningTime = true;
      }
    }
    pause(){
      this.subscription? this.subscription.unsubscribe():this.runningTime = false;
    }
    
    clear(){
      this.pause();
      this.time = 0;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
