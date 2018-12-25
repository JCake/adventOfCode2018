import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day7',
  templateUrl: './day7.component.html',
  styleUrls: ['./day7.component.css']
})
export class Day7Component implements OnInit {

  input: string;
  result: string;
  result2: string;

  stepsWithPrereqs(input: string): Map<string,string[]> {
    const instructions: string[] = input.match(/. must be finished before step ./g);
    let prereqs = new Map<string,string[]>();
    instructions.forEach((instruction) => {
      const prereq = instruction[0];
      const postStep = instruction[instruction.length - 1];
      if(prereqs.has(postStep)){
        prereqs.set(postStep, prereqs.get(postStep).concat([prereq]));
      } else {
        prereqs.set(postStep, [prereq]);
      }
      if(!prereqs.has(prereq)){
        prereqs.set(prereq, []);
      }
    });
    return prereqs;
  }

  prereqsCount(prereqs: Map<string,string[]>): number{
    let count = 0;
    prereqs.forEach((value) => {
      if(value){
        count += 1;
      } 
    });
    return count;
  }

  completionTime(sampleSteps: string, helpers: number, additionalSecondsPerStep: number): any {
    let prereqs = this.stepsWithPrereqs(sampleSteps);

    let helpersWithTasks = [];
    for(let i = 0; i < helpers; i++){
      helpersWithTasks.push({step: null, timeLeft: 0});
    }

    let stepsClaimed = new Set();
    let timeTaken = 0;
    while(this.prereqsCount(prereqs) > 0){
      helpersWithTasks.forEach((helperWithTask) => {
        if(helperWithTask.timeLeft === 0 && helperWithTask.step){    
          const completeStep = helperWithTask.step;       
          let newPrereqs = new Map();
          prereqs.forEach((value, key) => {
            if(value != null && value.indexOf(completeStep) > -1){
              value.splice(value.indexOf(completeStep), 1);
              newPrereqs.set(key, value);
            } else if(key != completeStep){
              newPrereqs.set(key, value);
            }
          });      
          prereqs = newPrereqs;
          prereqs.set(completeStep, null);                   
        }
      });
      helpersWithTasks.forEach((helperWithTask, index) => {
        if(helperWithTask.timeLeft === 0){
          const possibleSteps = [];
          prereqs.forEach((value, key) => {
            if(value != null && value.length === 0 && !stepsClaimed.has(key)){
              possibleSteps.push(key);
            }
          });
          if(possibleSteps.length > 0){
            const nextStep = possibleSteps.sort()[0];   
            helperWithTask.step = nextStep;
            helperWithTask.timeLeft = nextStep.charCodeAt(0) - 64 + additionalSecondsPerStep;
            stepsClaimed.add(nextStep);
            console.log(`Step ${nextStep} will take time ${helperWithTask.timeLeft}`);
          } else {
            helperWithTask.step = null;
          }
        } 
        if(helperWithTask.step){
          // TODO might need to put this in a third loop and always do it?
          helperWithTask.timeLeft = helperWithTask.timeLeft - 1;
        }
        console.log(`helper ${index} is working on ${helperWithTask.step} at time ${timeTaken}`);
      });
      timeTaken++;
    }
    return timeTaken - 1;
  }

  determineStepOrder(input: string): string {
    let prereqs = this.stepsWithPrereqs(input);
    let stepOrder = '';
    const originalPrereqsSize = prereqs.size;
    while(stepOrder.length < originalPrereqsSize){
      const possibleSteps = [];
      prereqs.forEach((value, key) => {
        if(value != null && value.length === 0){
          possibleSteps.push(key);
        }
      });
      const nextStep = possibleSteps.sort()[0];
      stepOrder += nextStep;
      let newPrereqs = new Map();
      prereqs.forEach((value, key) => {
        if(value != null && value.indexOf(nextStep) > -1){
          value.splice(value.indexOf(nextStep), 1);
          newPrereqs.set(key, value);
        } else if(key != nextStep){
          newPrereqs.set(key, value);
        }
      });

      prereqs = newPrereqs;
    }

    return stepOrder;
  }

  constructor() { }

  ngOnInit() {
  }

}
