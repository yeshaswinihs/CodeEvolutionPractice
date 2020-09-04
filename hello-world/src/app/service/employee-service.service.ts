import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/Observable/throw';

export const url = "http://localhost:8080/employees";

@Injectable({
  // we declare that this service should be created by the root application injector
  providedIn: 'root'
})
export class EmployeeSErviceService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    // return [
    //   { "id": 1, "name": "Andrew", "age": 30 },
    //   { "id": 2, "name": "Brandon", "age": 25 },
    //   { "id": 3, "name": "Christian", "age": 26 }
    // ];
    return this.http.get<IEmployee[]>(`${url}`).pipe(catchError(this.errorHandler));

    // Observables is a sequence of items that arrive asynchronously over time.
  }

  getEmployee(id): Observable<IEmployee> {
    return this.http.get<IEmployee>(`${url}/${id}`).pipe(catchError(this.errorHandler));
  }


  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
