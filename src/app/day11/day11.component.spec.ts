import { Day11Component } from './day11.component';

describe('Day11Component', () => {
  let component: Day11Component = new Day11Component();

  describe('single cell power', () => {

    it('should find power of single cell', () => {
      expect(component.cellPower(3,5,8)).toEqual(4);
    });
  });

  describe('max power 3x3', () => {
    let scenarios = [
      {serialNumber: 18, xCoord: 33, yCoord: 45},
      {serialNumber: 42, xCoord: 21, yCoord: 61},
      {serialNumber: 2694, xCoord: 243, yCoord: 38}
    ];

    scenarios.forEach((sc) => {
      it(`should find coords ${sc.xCoord},${sc.yCoord} as max power for serial number ${sc.serialNumber}`, () => {
        expect(component.coordsOfMaxPowerSegmentForSerialNo(sc.serialNumber)).toEqual({x: sc.xCoord, y: sc.yCoord});
      });
    });
  });

  // Run node instead
  xdescribe('max power 1x1 to 300x300', () => {
    let scenarios = [
      {serialNumber: 18, xCoord: 90, yCoord: 269, size: 16},
      {serialNumber: 42, xCoord: 232, yCoord: 251, size: 12},
      {serialNumber: 2694, xCoord: 243, yCoord: 38, size: 0}
    ];

    scenarios.forEach((sc) => {
      it(`should find coords ${sc.xCoord},${sc.yCoord},${sc.size} as max power for serial number ${sc.serialNumber}`, () => {
        expect(component.coordsAndSizeOfMaxPowerSegmentForSerialNo(sc.serialNumber))
          .toEqual({x: sc.xCoord, y: sc.yCoord, size: sc.size});
      });
    });
  });
});
