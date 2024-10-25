import { Component, OnInit } from '@angular/core';
import { interval,Subscription } from 'rxjs';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    public seconds:number = 0;
    public minutes:any = 0;
    private subscription!: Subscription;
    public runningTime: boolean = false;

    start(){
      if(!this.runningTime){
        const timer = interval(1000);
        this.subscription = timer.subscribe(()=>{
          this.converterSegundoParaMin()
          this.seconds++;
        })
        this.runningTime = true;
      }
    }
    async converterSegundoParaMin(){
      if(this.seconds === 60){
        const min = interval(60000);
        
        this.subscription = min.subscribe(()=>{
          this.minutes++;
        })
      }

    }
    pause(){
      this.subscription? this.subscription.unsubscribe(): 
      this.runningTime = false;
    }
    
    clear(){
      this.pause();
      this.seconds = 0;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
