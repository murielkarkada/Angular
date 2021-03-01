import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2> Employee List </h2>
  <ul class = "items" >
  <li  *ngFor="let employee of employees">
  <span >{{employee.id}}</span> {{employee.name}}</li>
  <ul>
  `,
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {

  public employees = [
    {"id": 111,"name": "Tesla","dept":3},
    {"id": 112,"name": "Curie","dept":4},
    {"id": 113,"name": "Thomas","dept":1},
    {"id": 113,"name": "Kakashi","dept":2}
    ] ;

  constructor() { }

  ngOnInit(): void {
  }

}
