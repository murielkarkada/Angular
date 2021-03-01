import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test1',
  template: `
    <div>
      <h2>Welcome to {{name}}</h2> 

      <h2>{{2+2}}</h2>

      <h2>{{"Welcome " + name}}</h2>

      <h2>{{name.length}}</h2>

      <h2>{{name.toUpperCase()}}</h2>

      <h2>{{greetUser()}}</h2>

`,
styles: [`
  `]
})
export class InterpolationComponent implements OnInit {

  public name = "Impelsys";
  
  public greeting = "";
  
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }
}