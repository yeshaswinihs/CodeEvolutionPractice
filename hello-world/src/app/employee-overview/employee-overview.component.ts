import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.css']
})
export class EmployeeOverviewComponent implements OnInit {

  public name;
  public name1;
  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    console.log(value);
    console.log(this.name);
  }

  onChange1(ngModel: NgModel) {
    console.log(ngModel.value);
    console.log(this.name1);
  }
}
