import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day6',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.css']
})
export class Day6Component implements OnInit {
  
  input:string;
  result:number;
  result2:number;

  constructor() { }

  ngOnInit() {
  }

  findSize(input: string): number {
    const numbers = input.match(/(\d+)/g);
    const coords = [];
    for(let i = 0; i < numbers.length; i += 2){
      coords.push([parseInt(numbers[i]), parseInt(numbers[i+1])])
    }
    console.log(coords);

    let minX = 9000;
    let maxX = 0;
    let minY = 9000;
    let maxY = 0;

    coords.forEach((coord, index) => {
      if(coord[0] > maxX){
        maxX = coord[0];
      }
      if(coord[0] < minX){
        minX = coord[0];
      }
      if(coord[1] > maxY){
        maxY = coord[1];
      }
      if(coord[1] < minY){
        minY = coord[1];
      }
    });
    console.log(`x range: ${minX} to ${maxX}; y range: ${minY} to ${maxY}`);

    const distanceArray = [];
    const infiniteIndices = new Set();

    for(let x = 0; x <= maxX * 2; x++){
      const innerArray = [];
      for(let y = 0; y <= maxY * 2; y++){
        const closestIndex = this.closestIndex(coords, x, y);
        innerArray.push(closestIndex);
        if(x === 0 || x === maxX * 2 || y === 0 || y === maxY * 2){
          infiniteIndices.add(closestIndex);
        }
      }
      distanceArray.push(innerArray);
    }
    console.log(distanceArray);


    const finiteIndices = [];
    coords.forEach((coord, index) => {
      if(!infiniteIndices.has(index)){
        finiteIndices.push(index);
      }
    });

    console.log(finiteIndices);

    let largestArea = 0;
    finiteIndices.forEach((index) => {
      let count = 0;
      distanceArray.forEach((innerArray) => {
        innerArray.forEach((value) => {
          if(value === index){
            count++;
          }
        });
      });
      if(count > largestArea){
        largestArea = count;
      }

    });

    return largestArea;
  }

  closestIndex(coords, x, y){
    let closestDistance = 999999;
    let closestIndex = -1;
    coords.forEach((coord, index) => {
      const distance = Math.abs(coord[0] - x) + Math.abs(coord[1] - y);
      if(distance < closestDistance){
        closestDistance = distance;
        closestIndex = index;
      }
      else if(distance === closestDistance){
        closestIndex = -1;
        return;
      }
    });
    return closestIndex;
  }

  findSizeTotalDistance(input: string): number {
    const numbers = input.match(/(\d+)/g);
    const coords = [];
    for(let i = 0; i < numbers.length; i += 2){
      coords.push([parseInt(numbers[i]), parseInt(numbers[i+1])])
    }
    console.log(coords);

    let within10000Count = 0;

    for(let x = 0; x <= 9000; x++){
      for(let y = 0; y <= 9000; y++){
        if(this.distancesSum(coords, x, y) < 10000){
          within10000Count++;
        }
      }
      
    }
    return within10000Count;;
  }

  distancesSum(coords, x, y){
    let distancesSum = 0;
    coords.forEach((coord, index) => {
      const distance = Math.abs(coord[0] - x) + Math.abs(coord[1] - y);
      distancesSum += distance;
    });
    return distancesSum;
  }

}
