import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeSErviceService } from '../service/employee-service.service';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public employee;
  public errorMsg;
  public employeeId;

  constructor(private _employeeService: EmployeeSErviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.employeeId = id;

      if (this.employeeId) {
        this._employeeService.getEmployee(this.employeeId).subscribe(data => this.employee = data, error => this.errorMsg = error);
      }
      else {
        // paramMap api helps us to get the parameters from the url
        this._employeeService.getEmployees().subscribe(data => this.employees = data,
          error => this.errorMsg = error);
      }
    });

  }


  goPrevious() {
    let previousId = this.employeeId - 1;
    this.router.navigate(['/employee-detail', previousId]);
  }

  goNext() {
    let nextId = this.employeeId + 1;
    this.router.navigate(['/employee-detail', nextId]);
  }

  // When we are navigating from one component back to the same componentFactoryName, the snapshot approach won't work.
  // Angular will figure out whether it needs to initialize a new component or reuse the same componentFactoryName.
  // When we navigate back to the same component , angular simply reuses the component.
  // No initialization implies the ngOnINit method wont get called.Hence the new id will never be retreived from the url.
  // To overcome this, we use paramMap Observable.Even when navigating to the same component, it reads the id parameter

  goToEmployeeList() {
    let selectedId = this.employeeId ? this.employeeId : null;
    // specifying absolute paths
    this.router.navigate(['/employee-list', { id: selectedId }]);
    // http://localhost:4200/employee-list;id=1, this id=1 is the optional route parameter becoz its existence doesn't affect the view, but 
    // they can be used to apply some logic to the view. Otional route parameter does not need a placeholder in routing modue configuration.

    // Relative navigation- with absolute Paths , when we change paths in routing module, we have to change all occurrence of that Paths - not flexible.
    // specifying relative paths
    //this.router.navigate(['../', { id: selectedId }]);
  }

  showOverview() {
    this.router.navigate(['employee-overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['employee-contact'], { relativeTo: this.route });
  }
}
