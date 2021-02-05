import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  num: number = 0;
  sqr: number = 0;

  no1: number = 0;
  no2: number = 0;
  addition: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getSquare() {
    this.sqr = this.num * this.num;
  }

  getAdd() {
    this.addition = Number(this.no1) + Number(this.no2);
  }
}
