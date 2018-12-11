import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component implements OnInit {

  input:string;
  result:string;

  constructor() { }

  ngOnInit() {
  }

  addFrequencies(frequenciesString: string): number {
    const numberStrings: string[] = frequenciesString.match(/(-?\d+)/g);
    return numberStrings.map((numStr) => parseInt(numStr)).reduce((a,b) => a + b);
  }

  findRepeatFrequency(frequenciesString: string): number {
    const numberStrings: string[] = frequenciesString.match(/(-?\d+)/g);
    const frequenciesSet = new Set();
    let currentFrequency = 0;
    let index = 0;
    while(!frequenciesSet.has(currentFrequency)){
      frequenciesSet.add(currentFrequency);
      currentFrequency += parseInt(numberStrings[index]);
      index = (index + 1) % numberStrings.length;
    }
    return currentFrequency;
  }

}
