import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6Component } from './day6.component';

describe('Day6Component', () => {
  let component: Day6Component = new Day6Component();

  it('should find greatest finite size', () => {
    expect(component.findSize(`1, 1
    1, 6
    8, 3
    3, 4
    5, 5
    8, 9`)).toEqual(17);
  });
});
