import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empForm: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    city: new FormControl(),
    salary: new FormControl(),
  })
  empData: any
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee()
    .subscribe(response => {
      this.empData = response;
    })
  }

  addEmp() {
    let form_data = this.empForm.value;
    this.employeeService.postEmployee(this.empForm.value)
    .subscribe(response => {
      this.empData = response;
    })
    
  }

}
