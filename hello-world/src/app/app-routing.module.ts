import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {EmployeeOverviewComponent} from './employee-overview/employee-overview.component';
import {EmployeeContactComponent} from './employee-contact/employee-contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Empty path is prefix to the url, then redirect to Login, but it wont work becoz empty path is prefix to any Path, kind of how empty string is prefix to any other string.
  // Prefered solutuion for empty path scenario is using redirect instead of component. For redirect to worker, we need to mention pathMatch property, 
  { path: 'login', component: LoginComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  {
    path: 'employee-detail/:id',
    component: EmployeeDetailComponent,
    children: [
      { path: 'employee-overview', component: EmployeeOverviewComponent },
      { path: 'employee-contact', component: EmployeeContactComponent }
    ]
  },
  { path: 'employee-detail', component: EmployeeDetailComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent, EmployeeDetailComponent, LoginComponent]