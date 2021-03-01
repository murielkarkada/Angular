import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : '', 
    component : DepartmentListComponent
  },
   {
    path: 'departments/:id' , 
    component :DepartmentDetailComponent , 
    children : [
                { path :'overview' , component: DepartmentOverviewComponent}
               ]
  },
  {
    path : 'departments', 
    component : DepartmentListComponent
  },
  {
    path : 'employees', 
    component : EmployeeListComponent
  },
  {
    path : "**", 
    component : PageNotFoundComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [DepartmentListComponent, 
                                  EmployeeListComponent , 
                                  DepartmentDetailComponent,
                                  DepartmentOverviewComponent,
                                  PageNotFoundComponent] 