import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day12',
  templateUrl: './day12.component.html',
  styleUrls: ['./day12.component.css']
})
export class Day12Component implements OnInit {
  pottedPlantSum(plantState: string, rules: string, generations: number): number {
    const initialSize = plantState.length;
    const negativeAddOns = Math.max(generations / 100000000, initialSize);
    const positiveAddOns = Math.max(generations / 100000000, initialSize);
    let extendedPlantState = '';
    for(let i = 0; i < negativeAddOns; i++){
      extendedPlantState += '.';
    }
    extendedPlantState += plantState;
    for(let i = 0; i < positiveAddOns; i++){
      extendedPlantState += '.';
    }
    plantState = extendedPlantState;
    console.log(plantState);

    const ruleStrArray = rules.split('\n');
    const rulesArray = [];
    ruleStrArray.forEach((rule) => {
      const rulesParts = rule.split(' => ');
      const part0 = rulesParts[0].trim();
      const part1 = rulesParts[1].trim();
      console.log(`rule parts: ${part0}, ${part1}`)
      rulesArray.push({input: part0, result: part1});
    });

    let firstPlantState = plantState;
    let nextPlantState = [];
    for(let i = 0; i < generations; i++){
      nextPlantState = [];
      for(let nps = 0; nps < negativeAddOns + initialSize + positiveAddOns; nps++){
        nextPlantState.push('.');
      }
      rulesArray.forEach((rule) => {
        let searchIndex = 0;
        while(searchIndex >= 0 && searchIndex < plantState.length){
          searchIndex = plantState.indexOf(rule.input, searchIndex + 1);
          if(searchIndex >= 0){
            nextPlantState[searchIndex + 2] = rule.result;
          }
        }
      });
      plantState = nextPlantState.join('');
      if(plantState === firstPlantState){
        console.log(`Back to initial state on generation ${i}`);
      }
      if(i % 1000 === 0){
        console.log(`State on generation ${i} is ${plantState}`);
      }
    }
    
    let offset = negativeAddOns;
    let sum = 0;
    for(let i = 0; i < plantState.length; i++){
      if(plantState.charAt(i) == '#'){
        sum += (i - offset);
      }
    }
    return sum;
  }

  constructor() { }

  ngOnInit() {
  }

}
