import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  no1: number = 0;
  no2: number = 0;
  subtraction: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getSub() {
    this.subtraction = this.no1 - this.no2;
  }
}
