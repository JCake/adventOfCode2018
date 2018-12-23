import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day10',
  templateUrl: './day10.component.html',
  styleUrls: ['./day10.component.css']
})
export class Day10Component implements OnInit {
  showMessge(input: string): boolean {
    const coordStrings = input.split(/\n/);
    const coords = [];
    coordStrings.forEach((coordStr) => {
      const coordAndVel = coordStr.match(/(-?\d+)/g);
      coords.push({x: parseInt(coordAndVel[0]), y: parseInt(coordAndVel[1]), 
        xv: parseInt(coordAndVel[2]), yv: parseInt(coordAndVel[3])});
    });
    
    while(!this.couldBeWords(coords)){
      coords.forEach((coord) => {
        coord.x = coord.x + coord.xv;
        coord.y = coord.y + coord.yv;
      }); 
    }
    this.print(this.buildGrid(coords));
    return true;
  }

  couldBeWords(coords){
    const xToYs: Map<number,number[]> = new Map();
    coords.forEach((coord) => {
      if(xToYs.has(coord.x)){
        xToYs.get(coord.x).push(coord.y);
      } else {
        xToYs.set(coord.x, [coord.y]);
      }
    });

    const numLinesNeeded = coords.length / 10;

    let possibleWords = 0;
    xToYs.forEach((value) => {
      let YsInARow = 1;
      let orderedYs = value.sort();
      let prevY = orderedYs[0];
      for(let yIndex = 1; yIndex < orderedYs.length; yIndex++){
        const y = orderedYs[yIndex];
        if(y == prevY + 1){
          YsInARow += 1;
        } else {
          YsInARow = 1;
        }
        console.log(`ys in a row: ${YsInARow}`);
        if(YsInARow >= 5){
          possibleWords += 1;
        }
        prevY = y;
      }
      
    });
    return possibleWords >= numLinesNeeded;
  }

  print(grid: string[][]){
    let extraSpace = '';
    grid.forEach((row) => {
      console.log("%c" + row.join('') + extraSpace, "color: blue; font-size: x-large; font-family: monospace;");
      extraSpace += ' ';
    })
  }

  buildGrid(coords){
    let minX = 500000;
    let maxX = -500000;
    let minY = 500000;
    let maxY = -500000;
    coords.forEach((coord) => {
      if(coord.x < minX){
        minX = coord.x;
      }
      if(coord.x > maxX){
        maxX = coord.x;
      }
      if(coord.y < minY){
        minY = coord.y;
      }
      if(coord.y > maxY){
        maxY = coord.y;
      }
    });

    const grid = [];
    for(let y = minY; y <= maxY + 1; y++){
      const gridRow = [];
      for(let x = minX; x <= maxX + 1; x++){
        gridRow.push(' ');
      }
      grid.push(gridRow);
    }

    coords.forEach((coord) => {
      grid[coord.y - minY][coord.x - minX] = '#';
    });

    return grid;
  }

  constructor() { }

  ngOnInit() {
  }

}
