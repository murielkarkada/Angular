import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test3',
  template: `
    <div>
          <h2 class="text-success">Hi Impeller</h2> <!--regular way -->

          <h2 [class]="successClass">Hi Impeller</h2>

          <h2 [class.text-danger]="hasError">Hi Impeller</h2>

          <h2 [ngClass]="messageClasses">NG class Message</h2>
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
export class ClassBindComponent implements OnInit {
    public successClass = "text-success";
      public hasError = false;
      public isSpecial = true;
      public messageClasses = {
        "text-success": !this.hasError,
        "text-danger": this.hasError,
        "text-special": this.isSpecial
      }
  
  constructor() { }

  ngOnInit() {
  }

 
}