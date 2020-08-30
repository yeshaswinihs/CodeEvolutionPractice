import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public username = 'in28minutes';
  public password = '';
  public isInvalid = false;
  public errorMessage = "Invalid Credentials"

  constructor(private router: Router,
    private jwtAuthenticationService: JwtAuthenticationService) { }

  ngOnInit() {
  }
  handleJWTLogin() {
    this.jwtAuthenticationService.executeJWTAuthentication(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['employee-list']);
          this.isInvalid = false;
        },
        error => {
          console.log(error);
          this.isInvalid = true;
        }
      )

  }
}
