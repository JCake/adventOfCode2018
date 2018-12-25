import { Component, OnInit } from '@angular/core';
import { getPreviousOrParentTNode } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-day8',
  templateUrl: './day8.component.html',
  styleUrls: ['./day8.component.css']
})
export class Day8Component implements OnInit {
  input: string;
  result: number;
  result2: number;

  rootValue(input: string): number {
    const numbers = input.match(/(\d+)/g).map((numStr) => parseInt(numStr));
    let treeNodes = [];
    let parent = null;
    let currentIndex = 0;
    while(currentIndex < numbers.length){
      const childNodes = numbers[currentIndex];
      const metadataCount = numbers[currentIndex + 1];
      currentIndex += 2;
      if(childNodes === 0){
        
        let sum = 0;
        for(let i = currentIndex; i < currentIndex + metadataCount; i++){
          sum += numbers[i];  
        }
        const leafNode = {value: sum, parent: parent, childrenCount: 0, children: []};

        currentIndex += metadataCount;

        if(parent){
          parent.children.push(leafNode);
        
          console.log(`after summing metadata, now at index ${currentIndex}`);
  
          while(parent != null && parent.children.length == parent.childrenCount){
            const parentMetadataCount = parent.metadataCount;
            for(let i = currentIndex; i < currentIndex + parentMetadataCount; i++){
              console.log(`metadata for parent is at overall index ${i}`);
              const metadataAsIndex = numbers[i] - 1;
              console.log(`metadataAsIndex: ${metadataAsIndex}`);
              if(metadataAsIndex < parent.childrenCount && metadataAsIndex >= 0){
                // TODO get smarter about how this indexing works
                parent.value += parent.children[metadataAsIndex].value;
              }
            }
            currentIndex += parentMetadataCount;
            parent = parent.parent;
          } 
        } else {
          treeNodes.push(leafNode);
        }
        
      } else {
        const newNode = {childrenCount: childNodes, children: [], parent: parent,
          metadataCount: metadataCount, metadataValues: [], value: 0};
        if(parent){
          parent.children.push(newNode);
        } else {
          treeNodes.push(newNode);
        }
        parent = newNode;
        
        
      }
      
    }
    return treeNodes[0].value;
  }
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
