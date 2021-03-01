import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-department-list',
  template: `
    <h2> Department List </h2>
    <ul class = "items" >
    <li 
        (click)="onselect(department)" 
        [class.selected]="isselected(department)" 
        *ngFor="let department of departments"
    >
    <span class="badge">{{department.id}}</span> {{department.name}}</li>
    <ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id" : 1, "name": "Angular"},
    {"id" : 2, "name" : "React"},
    {"id" : 3, "name" : "Java"},
    {"id" : 4, "name" : "PHP"}
  ];
   public selectedId;

  constructor(private router: Router , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap)=>
   {
     this.selectedId = parseInt(params.get('id'));
   })
  }

  onselect(department)
  {
    this.router.navigate(['/departments',department.id]);
  }

  isselected(department)
  {
    return department.id === this.selectedId;
  }

}
