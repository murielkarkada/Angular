import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test5',
  template: `
    <div>
    <input type="text" [(ngModel)]="name">
     {{name}}
         
    </div>
     

`,
styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class TwoWayBindComponent implements OnInit {

  public name = "";
    
  
  constructor() { }

  ngOnInit() {
  }

 
}