import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  constructor(private http: HttpClient) { }

  getEmployee() {
    let url = "http://localhost:3000/employee";
    return this.http.get(url);
  }

  postEmployee(form_data: any) {
    let url = "http://localhost:3000/employee";
    return this.http.post(url, form_data);
  }
  
}
