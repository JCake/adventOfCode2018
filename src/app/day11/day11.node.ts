import {Day11Component} from './day11.component';

const component = new Day11Component();

let scenarios = [
    {serialNumber: 18, xCoord: 90, yCoord: 269, size: 16},
    {serialNumber: 42, xCoord: 232, yCoord: 251, size: 12},
    {serialNumber: 2694, xCoord: 243, yCoord: 38, size: 0}
  ];

  scenarios.forEach((sc) => {
    const result = component.coordsAndSizeOfMaxPowerSegmentForSerialNo(sc.serialNumber);
    console.log(`Result for serial number ${sc.serialNumber}: ${result.x},${result.y},${result.size}`);
  });