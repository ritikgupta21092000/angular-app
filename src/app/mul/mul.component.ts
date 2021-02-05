import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mul',
  templateUrl: './mul.component.html',
  styleUrls: ['./mul.component.css']
})
export class MulComponent implements OnInit {

  mulForm = new FormGroup({
    num1: new FormControl(),
    num2: new FormControl()
  });
  mul: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getMul() {
    this.mul = this.mulForm.value.num1 * this.mulForm.value.num2
  }
}
