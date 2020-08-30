import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticateUser';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  constructor(private http: HttpClient) { }

  executeJWTAuthentication(username, password) {
    return this.http.post<any>('http://localhost:8080/authenticate', {
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          return data;
        }
      )
    );

  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }
}
