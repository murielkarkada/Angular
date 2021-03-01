import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test4',
  template: `
    <div>
    <button (click)="onClick()">Greet</button>  
    <span> {{greeting}}</span> 
    </div>
     

`,
styles: [`
    .
  `]
})
export class EventBindComponent implements OnInit {
    
    public greeting = "";
    constructor() { }

  ngOnInit() {
  }
  onClick(){
        console.log("Welcome to impelsys")
        this.greeting = "Greeting value updated";
      }
 
}