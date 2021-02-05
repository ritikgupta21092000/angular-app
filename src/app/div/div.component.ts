import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms"

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent implements OnInit {

  divForm = new FormGroup({
    num1: new FormControl(),
    num2: new FormControl()
  });
  div: number = 0;
  result: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getDiv() {
    this.result = true;
    this.div = this.divForm.value.num1 % this.divForm.value.num2;
  }

}
