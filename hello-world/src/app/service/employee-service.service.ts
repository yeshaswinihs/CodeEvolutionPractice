import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';

@Injectable({
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
    return this.http.get<IEmployee[]>("http://localhost:8080/employees");

    // Observables is a sequence of items that arrive asynchronously over time.
  }
}
