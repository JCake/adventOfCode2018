import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5Component } from './day5.component';

describe('Day5Component', () => {
  let component: Day5Component = new Day5Component();
 
  describe('remaining units', () => {
    const scenarios = [
      {input: '', remaining: 0},
      {input: 'aabAAB', remaining: 6},
      {input: 'aA', remaining: 0},
      {input: 'abBA', remaining: 0},
      {input: 'ABba', remaining: 0},
      {input: 'dabAcCaCBAcCcaDA', remaining: 10}
    ];

    scenarios.forEach((scenario) => {
      it(`should resolve chain ${scenario.input} to ${scenario.remaining} units remaining`, () => {
        expect(component.remainingUnit(scenario.input)).toEqual(scenario.remaining);
      });
    })
  });

  it('should find proper min length', () => {
    expect(component.remainingUnitWithProblematicRemoved('dabAcCaCBAcCcaDA')).toEqual(4);
  })
});
