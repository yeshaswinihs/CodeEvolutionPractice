import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeSErviceService } from '../service/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeSErviceService,
    private router: Router) { }

  // Lifecycle hook gets called once the component has been initialized
  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
        error => this.errorMsg = error);
  }

  onSelect(employee) {
    this.router.navigate(['/employee-detail', employee.id]);
  }

}
