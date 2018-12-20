import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8Component } from './day8.component';

describe('Day8Component', () => {
  let component: Day8Component = new Day8Component();

  describe('find sum', () => {
    it('should find sum for single node with single metadata entry', () => {
      expect(component.sumMetadata('0 1 5')).toEqual(5);
    });

    it('should find sum for single node with multiple metadata entries', () => {
      expect(component.sumMetadata('0 2 5 7')).toEqual(12);
    });

    it('should find sum for one parent and one child nodes with single metadata each', () => {
      expect(component.sumMetadata('1 1 0 1 5 7')).toEqual(12);
    });

    it('should find sum for one parent and one child nodes with multiple metadata each.', () => {
      expect(component.sumMetadata('1 2 0 2 5 3 7 9')).toEqual(24);
    });

    it('should find sum for more deeply nested node tree', () => { 
      expect(component.sumMetadata('2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2')).toEqual(138);
    });

    it('should find sum for more branches in node tree', () => {
      expect(component.sumMetadata('2 3 1 3 0 2 3 9 10 11 12 1 1 0 1 99 2 1 1 2')).toEqual(150);  
    });

    it('should find sum for root with three direct children', () => {
      expect(component.sumMetadata('3 2 0 1 5 0 2 6 3 0 3 1 2 3 9 2')).toEqual(5 + 6 + 3 + 1 + 2 + 3 + 9 + 2);
    });

    it('should find sum for deeper trees with > 2 children of nodes', () => {
      expect(component.sumMetadata('3 2 3 1 0 1 4 0 1 2 0 1 1 5 3 2 0 1 1 0 1 3 0 1 5 6 3 0 3 1 2 3 9 2'))
        .toEqual(5 + 6 + 3 + 1 + 2 + 3 + 9 + 2 + 4 + 2 + 1 + 1 + 3 + 5);
    });
  });
  
  fdescribe('find root node value', () => {
    it('should find root node value for single node with single metadata entry', () => {
      expect(component.rootValue('0 1 5')).toEqual(5);
    });

    it('should find root node value for single node with multiple metadata entries', () => {
      expect(component.rootValue('0 2 5 7')).toEqual(12);
    });

    it('should find root node value for one parent and one child nodes with single metadata each and parent references child', () => {
      expect(component.rootValue('1 1 0 1 6 1')).toEqual(6);
    });

    it('should find root node value for one parent and one child nodes with single metadata each and parent does not reference child', () => {
      expect(component.rootValue('1 1 0 1 6 2')).toEqual(0);
    });

    it('should find root node value for one parent and two child nodes with second one referenced by metadata', () => {
      expect(component.rootValue('2 1 0 1 6 0 1 3 2')).toEqual(3);
    });

    it('should find root node value for one parent and two child nodes with first one referenced by metadata', () => {
      expect(component.rootValue('2 1 0 1 6 0 1 3 1')).toEqual(6);
    });

    it('should find root node value for one parent and two child nodes with both children referenced by metadata', () => {
      expect(component.rootValue('2 2 0 1 6 0 1 3 2 1')).toEqual(9);
    });

    it('should find root node value for one parent and two child nodes with multiple metadata and with both children referenced by metadata', () => {
      expect(component.rootValue('2 2 0 2 6 4 0 2 3 1 2 1')).toEqual(14);
    });

    it('should find root node value for one parent and two child nodes some references by metadata out of range', () => {
      expect(component.rootValue('2 4 0 2 6 4 0 2 3 1 2 1 3 0')).toEqual(14);
    });

    it('should find root node value for more deeply nested node tree', () => { 
      expect(component.rootValue('2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2')).toEqual(66);
    });

    it('should find the root value for more branches in node tree', () => {
      expect(component.rootValue('2 3 1 2 0 3 10 11 12 1 9 1 1 0 1 99 2 1 1 2')).toEqual(66);  
    });

    // it('should find sum for root with three direct children', () => {
    //   expect(component.sumMetadata('3 2 0 1 5 0 2 6 3 0 3 1 2 3 9 2')).toEqual(5 + 6 + 3 + 1 + 2 + 3 + 9 + 2);
    // });

    // it('should find sum for deeper trees with > 2 children of nodes', () => {
    //   expect(component.sumMetadata('3 2 3 1 0 1 4 0 1 2 0 1 1 5 3 2 0 1 1 0 1 3 0 1 5 6 3 0 3 1 2 3 9 2'))
    //     .toEqual(5 + 6 + 3 + 1 + 2 + 3 + 9 + 2 + 4 + 2 + 1 + 1 + 3 + 5);
    // });
  });

});
