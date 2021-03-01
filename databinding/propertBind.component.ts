import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test2',
  template: `
    <div>
    <input [id]="myId" type="text" value="Nickola Tesla">
    </div>      

`,
styles: [`
    
  `]
})
export class PropertyBindComponent implements OnInit {

    public myId = "testId";
    public isDisabled = false;
  
  constructor() { }

  ngOnInit() {
  }

 
}