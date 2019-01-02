import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day14Component } from './day14.component';

fdescribe('Day14Component', () => {
  let component: Day14Component = new Day14Component();
  
  describe('next 10', () => {
    const scenarios = [
      {count: 5, next10: '0124515891'},
      {count: 9, next10: '5158916779'},
      {count: 18, next10: '9251071085'},
      {count: 2018, next10: '5941429882'},
      // {count: 894501, next10: ''}
    ];

    scenarios.forEach((sc) => {
      it(`should give ${sc.next10} after ${sc.count}`, () => {
        expect(component.next10(sc.count)).toEqual(sc.next10);
      });
    })
  });

  describe('number before', () => {
    const scenarios = [
      {digits: '51589', after: 9},
      {digits: '01245', after: 5},
      {digits: '92510', after: 18},
      {digits: '59414', after: 2018},
      // {digits: '894501', after: 0}
    ];

    scenarios.forEach((sc) => {
      it(`should give ${sc.after} for number needed to find ${sc.digits}`, () => {
        expect(component.numberBefore(sc.digits)).toEqual(sc.after);
      });
    });
  });
});
