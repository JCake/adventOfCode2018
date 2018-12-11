import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day6',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.css']
})
export class Day6Component implements OnInit {
  
  input:string;
  result:string;

  constructor() { }

  ngOnInit() {
  }

  findSize(input: string): number {
    throw new Error("Method not implemented.");
  }

  // TODO Remove outliers (max/min x and y coords) and then calculate areas of remaining points

}
