import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeSErviceService } from '../service/employee-service.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMsg;
  public selectedId;

  constructor(private _employeeService: EmployeeSErviceService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  // Lifecycle hook gets called once the component has been initialized
  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });


    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
        error => this.errorMsg = error);
  }

  onSelect(employee) {
    this.router.navigate(['/employee-detail', employee.id]);
    // specifying relative paths
    //this.router.navigate([employee.id], {relativeTo:this.activatedRoute});
  }








  isSelected(employee) {
    return employee.id === this.selectedId;
  }

}
