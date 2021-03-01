import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
      You have selected department with id = {{deptId}}
    </h3>
    <p>
    <button (click)= showoverview()> Overview </button>
    <router-outlet></router-outlet>
  </p>

    <button (click)=goback() >Previous</button>
    <button (click)= gonext() > Next </button><br><br>

    <button (click)= gotodept() > Back</button>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  
  public deptId;
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
   //snapshot method 
    //this.deptId  = parseInt(this.route.snapshot.paramMap.get('id'));

    //using ParamMap observable
   this.route.paramMap.subscribe((params : ParamMap)=>
   {
     this.deptId = parseInt(params.get('id'));
   })
  
  }

  goback()
  {
    let previousId = this.deptId - 1;
    this.router.navigate(['/departments',previousId]);

  }

  gonext()
  {

    let nextId = this.deptId + 1;
    this.router.navigate(['/departments',nextId]);

  }
  gotodept()
  {
    let selectedId = this.deptId ?this.deptId:null;
    this.router.navigate(['/departments',{id : selectedId}]);
  }
  showoverview()
  {
    this.router.navigate(['overview'],{relativeTo: this.route})
  }

}
