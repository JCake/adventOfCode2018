import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Component } from './day3.component';

describe('Day3Component', () => {
  const component: Day3Component = new Day3Component();

  const input = `#1 @ 1,3: 4x4
  #2 @ 3,1: 4x4
  #3 @ 5,5: 2x2`;
  it('should count the number of squares claimed by multiple elves', () => {
    expect(component.multipleClaims(input)).toEqual(4);
  });
  it('should find the unique claim', () => {
    expect(component.uniqueClaim(input)).toEqual(3);
  });
});
