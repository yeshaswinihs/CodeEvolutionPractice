import { Component, OnInit } from '@angular/core';
import { EmployeeSErviceService } from '../service/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeSErviceService) { }

  // Lifecycle hook gets called once the component has been initialized
  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }


}
