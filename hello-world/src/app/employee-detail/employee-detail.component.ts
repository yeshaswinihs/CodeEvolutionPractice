import { Component, OnInit } from '@angular/core';
import { EmployeeSErviceService } from '../service/employee-service.service';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.employeeId = id;
      this._employeeService.getEmployee(id).subscribe(data => this.employee = data, error => this.errorMsg = error);
    }
    else {
      // paramMap api helps us to get the parameters from the url
      this._employeeService.getEmployees().subscribe(data => this.employees = data,
        error => this.errorMsg = error);
    }
  }

}
