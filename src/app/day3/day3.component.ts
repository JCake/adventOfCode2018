import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css']
})
export class Day3Component implements OnInit {

  findClaims(input: string): Map<string, number> {
    const claimCounts: Map<string, number> = new Map<string, number>();
    const claims = input.substr(1).split('#');
    console.log('# of claims: ' + claims.length);
    claims.forEach((claim) => {
      const dimensions = claim.split('@ ')[1];
      const dimensionParts = dimensions.split(': ');
      const corners = dimensionParts[0].match(/(\d)+/g);
      const sizes = dimensionParts[1].match(/(\d)+/g);
      const left = parseInt(corners[0]);
      const top = parseInt(corners[1]);
      const wide = parseInt(sizes[0]);
      const tall = parseInt(sizes[1]);
      for(let x = left; x < left + wide; x++){
        for(let y = top; y < top + tall; y++){
          const coordStr = `${x}x${y}`;
          if(claimCounts.has(coordStr)){
            claimCounts.set(coordStr, claimCounts.get(coordStr) + 1);
          } else {
            claimCounts.set(coordStr, 1);
          }
        }
      }
    });
    return claimCounts;
  }

  multipleClaims(input: string): number {

    let multipleClaims = 0;
    this.findClaims(input).forEach((value) => {
      if(value > 1){
        multipleClaims++;
      }
    })
    return multipleClaims;
  }

  uniqueClaim(input: string): number {
    const claimCounts = this.findClaims(input);  

    let uniqueClaim = 0;
    const claims = input.substr(1).split('#');
    claims.forEach((claim) => {
      const claimNum = claim.split(' @ ')[0];
      const dimensions = claim.split(' @ ')[1];
      const dimensionParts = dimensions.split(': ');
      const corners = dimensionParts[0].match(/(\d)+/g);
      const sizes = dimensionParts[1].match(/(\d)+/g);
      const left = parseInt(corners[0]);
      const top = parseInt(corners[1]);
      const wide = parseInt(sizes[0]);
      const tall = parseInt(sizes[1]);
      let allUnique = true;
      for(let x = left; x < left + wide; x++){
        for(let y = top; y < top + tall; y++){
          const coordStr = `${x}x${y}`;
          if(claimCounts.get(coordStr) > 1){
            allUnique = false;
            break;
          }
        }
      }
      if(allUnique){
        uniqueClaim = parseInt(claimNum);
        return;
      }
    });
    return uniqueClaim;
  }

  constructor() { }

  ngOnInit() {
  }

}
