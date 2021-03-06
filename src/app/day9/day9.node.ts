import { Day9Component } from './day9.component';


let component: Day9Component = new Day9Component();
  
  const scenarios = [
    {players: 9, lastMarble: 25, highScore: 32},
    {players: 10, lastMarble: 1618, highScore: 8317},
    {players: 13, lastMarble: 7999, highScore: 146373},
    {players: 17, lastMarble: 1104, highScore: 2764},
    {players: 21, lastMarble: 6111, highScore: 54718},
    {players: 30, lastMarble: 5807, highScore: 37305},
    {players: 425, lastMarble: 70848, highScore: 413188},
    {players: 425, lastMarble: 7084800, highScore: 413188}
  ];

  scenarios.forEach((sc) => {
    const winningScore = component.winningScore(sc.players, sc.lastMarble);
    console.log(`Expected winning score of ${sc.highScore} with last marble ${sc.lastMarble} and was ${winningScore}`);
    
  });