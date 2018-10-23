import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse } from 'ng-animate';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('pulse', [
      transition('in => out', useAnimation(pulse,{
        params:{
          timing :  3 ,
        }
      }) ),
      transition('out => in', useAnimation(pulse,{
        params:{
          timing :  3 ,
        }
      }) )
    ]),
    
  ],
})
export class HomeComponent implements OnInit {
  public scrollIndex=['top','me','projects','contact'];
  public currentScrollIndex=0;
  pulse: any;
  state = 'in';
  
  
  constructor(private _scrollToService: ScrollToService) { }
  
  ngOnInit() {
    setTimeout(() => {
      this.state = 'out';
    }, 0);
    this.currentScrollIndex=0;
  }
  
  onEnd(event) {
    this.state = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.state = 'out';
      }, 0);
    }
  }
  
  /**
  * Scroll down 
  */
  public triggerScrollTo() { 
    if(this.currentScrollIndex<this.scrollIndex.length-1){
      this.currentScrollIndex++;
    }else{
      this.currentScrollIndex=0;
    }
    const config: ScrollToConfigOptions = {
      target: this.scrollIndex[this.currentScrollIndex],
    };
    this._scrollToService.scrollTo(config);
  }
}
