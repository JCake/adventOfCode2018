import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7Component } from './day7.component';

describe('Day7Component', () => {
  let component: Day7Component = new Day7Component();

  const sampleSteps = `Step C must be finished before step A can begin.
  Step C must be finished before step F can begin.
  Step A must be finished before step B can begin.
  Step A must be finished before step D can begin.
  Step B must be finished before step E can begin.
  Step D must be finished before step E can begin.
  Step F must be finished before step E can begin.`;
 
  it('should determine step order', () => {
    expect(component.determineStepOrder(sampleSteps)).toEqual('CABDFE');
  });

  it('should determine step completion time', () => {
    expect(component.completionTime(sampleSteps, 2, 0)).toEqual(15);
  });
});
