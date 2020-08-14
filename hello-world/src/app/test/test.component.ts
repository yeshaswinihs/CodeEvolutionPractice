import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Vishwas";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled: boolean = false;

  public textSuccess = "text-success";
  public hasError: boolean = true;
  public isSpecial: boolean = true;
  public highlightColor = "orange";
public greeting="";

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public titleStyles = {
    "color": "blue",
    "fontStyle": "italic"
  }
  constructor() { }

  ngOnInit() {
  }
  greetUser() {
    return "Hello" + this.name;
  }
  enable() {
    this.isDisabled = false;
  }
  disable() {
    this.isDisabled = true;
  }
  onClick(event){
    console.log("Welcome to code evolution");
    this.greeting= "Welcome to code evolution";
    console.log(event);
  }
}
