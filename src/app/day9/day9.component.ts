import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day9',
  templateUrl: './day9.component.html',
  styleUrls: ['./day9.component.css']
})
export class Day9Component implements OnInit {
  winningScore(players: number, lastMarble: number): number {
    let scores = [];
    for(let i = 0; i < players; i++){
      scores.push(0);
    }

    let circle = [0];
    let currentMarbleIndex = 0;
    let player = 0;
    for(let i = 1; i <= lastMarble; i++){
      if(i % 23 === 0){
        let removalIndex = currentMarbleIndex - 7;
        if(removalIndex <= 0){
          removalIndex = circle.length + removalIndex;
        }
        scores[player] = scores[player] + i + circle[removalIndex];
        

        if(circle.length > lastMarble / 2.2){
          circle = circle.slice(removalIndex + 1, circle.length).concat(circle.slice(0, removalIndex));
          currentMarbleIndex = 0;
          circle = circle.slice(0, lastMarble / 2.2);
        } else {
          circle.splice(removalIndex, 1);
          currentMarbleIndex = removalIndex;
        }

        // // Keep circle only to size needed:
        // if(removalIndex + 50 > circle.length){
        //   if(removalIndex + 50 - circle.length < removalIndex){
        //     circle = circle.slice(removalIndex, circle.length)
        //       .concat(circle.slice(0, (removalIndex + 50 - circle.length)));
        //     currentMarbleIndex = 0;
        //   } else {
        //     currentMarbleIndex = removalIndex;
        //   }
        // } else {
        //   circle = circle.slice(removalIndex, removalIndex + 50);
        //   currentMarbleIndex = 0;
        // }
        
      } else {
        let insertionIndex = (currentMarbleIndex + 2) % circle.length;
        if(insertionIndex === 0){
          insertionIndex = circle.length;
        }
        circle.splice(insertionIndex, 0, i);
        currentMarbleIndex = insertionIndex;
      }
      
      player = (player + 1) % players;
    }
    
    let maxScore = 0;
    for(let i = 0; i < players; i++){
      if(scores[i] > maxScore){
        maxScore = scores[i];
      }
    }
    return maxScore;
  }

  constructor() { }

  ngOnInit() {
  }

}
