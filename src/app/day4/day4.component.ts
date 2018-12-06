import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.css']
})
export class Day4Component implements OnInit {

  orderInput(input: string): string {
    let inputParts: string[] = input.substring(1).split('[');
    inputParts = inputParts.sort();
    return inputParts.join('[');
  }

  strategy1(input: string): number {
    input = this.orderInput(input);
    const dailyGuardActions = input.split('Guard');
    const guardNumberToSleepDuration = new Map<number, number>();
    // has an extra bit at the beginning before first 'Guard' keyword
    for(let i = 1; i < dailyGuardActions.length; i++){
      const thisDaysGuardActions = dailyGuardActions[i];
      const guardNumber: number = parseInt(thisDaysGuardActions.match(/(\d+) begins shift/)[0]);
      if(!guardNumberToSleepDuration.has(guardNumber)){
        guardNumberToSleepDuration.set(guardNumber, 0);  
      }
      const sleepTimes = thisDaysGuardActions.match(/(\d\d)] falls asleep/g);
      const wakeTimes = thisDaysGuardActions.match(/(\d\d)] wakes up/g);
      if(sleepTimes){
        for(let s = 0; s < sleepTimes.length; s++){
          guardNumberToSleepDuration.set(guardNumber, guardNumberToSleepDuration.get(guardNumber) +
          parseInt(wakeTimes[s]) - parseInt(sleepTimes[s]));  
        }
      }

    }

    let maxSleepTime = 0;
    let maxSleepGuard = 0;
    guardNumberToSleepDuration.forEach((sleepDuration, guardNumber) => {
      console.log(`Guard ${guardNumber} slept for ${sleepDuration}`);
      if(sleepDuration > maxSleepTime){
        maxSleepTime = sleepDuration;
        maxSleepGuard = guardNumber;
      }
    });

    let minutes: number[] = [];
    for(let i = 0; i <= 59; i++){
      minutes.push(0);
    }
    for(let i = 1; i < dailyGuardActions.length; i++){
      const thisDaysGuardActions = dailyGuardActions[i];
      const guardNumber: number = parseInt(thisDaysGuardActions.match(/(\d+) begins shift/)[0]);
      const sleepTimes = thisDaysGuardActions.match(/(\d\d)] falls asleep/g);
      const wakeTimes = thisDaysGuardActions.match(/(\d\d)] wakes up/g);
      if(guardNumber === maxSleepGuard && sleepTimes){
        for(let si = 0; si < sleepTimes.length; si++){
          for(let s = parseInt(sleepTimes[si]); s < parseInt(wakeTimes[si]); s++){
            minutes[s] = minutes[s] + 1;
          }
        }  
      }
    }
    let maxMinute = 0;
    let maxCountAtMinute = 0;
    for(let i = 0; i <= 59; i++){
      if(minutes[i] > maxCountAtMinute){
        maxCountAtMinute = minutes[i];
        maxMinute = i;
      }
    }

    return maxSleepGuard * maxMinute;
  }

  strategy2(input: string): number {
    input = this.orderInput(input);
    const dailyGuardActions = input.split('Guard');
    const guardNumberToSleepTimes = new Map<number, number[]>();
    // has an extra bit at the beginning before first 'Guard' keyword
    for(let i = 1; i < dailyGuardActions.length; i++){
      const thisDaysGuardActions = dailyGuardActions[i];
      const guardNumber: number = parseInt(thisDaysGuardActions.match(/(\d+) begins shift/)[0]);
      if(!guardNumberToSleepTimes.has(guardNumber)){
        let minutes: number[] = [];
        for(let i = 0; i <= 59; i++){
          minutes.push(0);
        }
        guardNumberToSleepTimes.set(guardNumber, minutes);  
      }
      const sleepTimes = thisDaysGuardActions.match(/(\d\d)] falls asleep/g);
      const wakeTimes = thisDaysGuardActions.match(/(\d\d)] wakes up/g);
      if(sleepTimes){
        let minutes = guardNumberToSleepTimes.get(guardNumber);
        for(let si = 0; si < sleepTimes.length; si++){
          for(let s = parseInt(sleepTimes[si]); s < parseInt(wakeTimes[si]); s++){
            minutes[s] = minutes[s] + 1;
          }
        }  
        guardNumberToSleepTimes.set(guardNumber, minutes);
      }

    }

    let maxSleepTime = 0;
    let maxSleepGuard = 0;
    let maxSleepMinute = 0;
    guardNumberToSleepTimes.forEach((sleepTimes, guardNumber) => {
      for(let i = 0; i <= 59; i++){
        if(sleepTimes[i] > maxSleepTime) {
          maxSleepTime = sleepTimes[i];
          maxSleepGuard = guardNumber;
          maxSleepMinute = i;
        }
      }

    });

    return maxSleepGuard * maxSleepMinute;
  }

  constructor() { }

  ngOnInit() {
  }

}
