import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day11',
  templateUrl: './day11.component.html',
  styleUrls: ['./day11.component.css']
})
export class Day11Component implements OnInit {
  coordsAndSizeOfMaxPowerSegmentForSerialNo(serialNumber: number): any {
    let cellPowers = [];
    for(let y = 1; y <= 300; y++){
      const cellPowersRow = [];
      for(let x = 1; x <= 300; x++){
        cellPowersRow.push(this.cellPower(x,y,serialNumber));
      }
      cellPowers.push(cellPowersRow);
    }

    let maxPower = -5000;
    let maxPowerSize = 0;
    let maxPowerXCorner = 0;
    let maxPowerYCorner = 0;

    for(let size = 1; size <= 300; size++){
      for(let y = 1; y <= 301 - size; y++){
        for(let x = 1; x <= 301 - size; x++){
          let sum = 0;
          for(let yi = y; yi < y + size; yi++){
            for(let xi = x; xi < x + size; xi++){
              sum += cellPowers[yi - 1][xi - 1];
            }
          }
          if(sum > maxPower){
            maxPower = sum;
            maxPowerSize = size;
            maxPowerXCorner = x;
            maxPowerYCorner = y;
          }
        }
      }
    }
    
    return {x: maxPowerXCorner, y: maxPowerYCorner, size: maxPowerSize};
  }

  /*
  Find the fuel cell's rack ID, which is its X coordinate plus 10.
Begin with a power level of the rack ID times the Y coordinate.
Increase the power level by the value of the grid serial number (your puzzle input).
Set the power level to itself multiplied by the rack ID.
Keep only the hundreds digit of the power level (so 12345 becomes 3; numbers with no hundreds digit become 0).
Subtract 5 from the power level.
  */
  cellPower(x: number, y: number, serial: number): any {
    const rackId = x + 10;
    let powerLevel = rackId * y + serial;
    powerLevel = powerLevel * rackId;
    powerLevel = Math.floor(powerLevel / 100) % 10 - 5;
    return powerLevel;
  }

  coordsOfMaxPowerSegmentForSerialNo(serialNumber: number): any {
    let cellPowers = [];
    for(let y = 1; y <= 300; y++){
      const cellPowersRow = [];
      for(let x = 1; x <= 300; x++){
        cellPowersRow.push(this.cellPower(x,y,serialNumber));
      }
      cellPowers.push(cellPowersRow);
    }

    let maxPower = -5000;
    let maxPowerXCorner = 0;
    let maxPowerYCorner = 0;

    for(let y = 1; y <= 298; y++){
      for(let x = 1; x <= 298; x++){
        let sum = cellPowers[y - 1][x - 1] + cellPowers[y - 1][x] + cellPowers[y - 1][x + 1] +
        cellPowers[y][x - 1] + cellPowers[y][x] + cellPowers[y][x + 1] +
        cellPowers[y + 1][x - 1] + cellPowers[y + 1][x] + cellPowers[y + 1][x + 1];
        if(sum > maxPower){
          maxPower = sum;
          maxPowerXCorner = x;
          maxPowerYCorner = y;
        }
      }
    }
    return {x: maxPowerXCorner, y: maxPowerYCorner};
  }

  constructor() { }

  ngOnInit() {
  }

}
