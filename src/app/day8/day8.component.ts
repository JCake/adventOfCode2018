import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day8',
  templateUrl: './day8.component.html',
  styleUrls: ['./day8.component.css']
})
export class Day8Component implements OnInit {
  sumMetadata(input: string): number {
    const numbers = input.match(/(\d+)/g).map((numStr) => parseInt(numStr));
    let treeNodes = []; // TODO or maybe tree node sums?
    let currentIndex = 0;
    let sum = 0;
    while(currentIndex < numbers.length){
      const childNodes = numbers[currentIndex];
      const metadataCount = numbers[currentIndex + 1];
      currentIndex += 2;
      if(childNodes === 0){
        
        let parentNodeChildCount = 0;
        let metadataNeedingToSum = metadataCount;
        while(parentNodeChildCount === 0 && treeNodes.length > 0){
          treeNodes[treeNodes.length - 1].childrenCount -= 1;
          parentNodeChildCount = treeNodes[treeNodes.length - 1].childrenCount;
          if(treeNodes[treeNodes.length - 1].childrenCount === 0){
            metadataNeedingToSum += treeNodes.pop().metadataCount;
          }
        }
        
        for(let i = currentIndex; i < currentIndex + metadataNeedingToSum; i++){
          sum += numbers[i];
        }
        currentIndex += metadataNeedingToSum;
      } else {
        treeNodes.push({childrenCount: childNodes, metadataCount: metadataCount});
      }
      
    }
    return sum;
  }

  constructor() { }

  ngOnInit() {
  }

}
