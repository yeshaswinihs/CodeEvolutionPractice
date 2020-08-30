import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { nextContext } from '@angular/core/src/render3';
import { JwtAuthenticationService } from './jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBaicAuthService implements HttpInterceptor {

  constructor(
    private jwtAuthenticationService: JwtAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    //let username = 'in28minutes'
    //let password = 'dummy'


    //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.jwtAuthenticationService.getAuthenticatedToken();
    let username = this.jwtAuthenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }

    return next.handle(request);
  }


}
