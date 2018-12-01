import { Day1Component } from './day1.component';

describe('Day1Component', () => {
  const component: Day1Component = new Day1Component();

  describe('add frequencies', () => {
    const scenarios = [
      {input: '+1, +1, +1', output: 3},
      {input: '+2, +1, +1', output: 4},
      {input: '+1, +1, -2', output: 0},
      {input: '-1, -2, -3', output: -6},
      {input: '+25, -13', output: 12}
    ];
    /*
    +1, +1, +1 results in  3
+1, +1, -2 results in  0
-1, -2, -3 results in -6
    */
    
    scenarios.forEach((scenario) => {
      it(`should convert ${scenario.input} to sum of ${scenario.output}`, () => {
        expect(component.addFrequencies(scenario.input)).toEqual(scenario.output);
      });
    });
  });

  describe('find repeat frequency', () => {
    const scenarios = [
      {input: '+1, -1', output: 0},
      {input: '+2, +2, -2', output: 2},
      {input: '+3, +3, +4, -2, -4', output: 10},
      {input: '-6, +3, +8, +5, -6', output: 5},
      {input: '+7, +7, -2, -7, -4', output: 14}
    ];

    scenarios.forEach((scenario) => {
      it(`should find repeat of ${scenario.output} from ${scenario.input}`, () => {
        expect(component.findRepeatFrequency(scenario.input)).toEqual(scenario.output);
      });
    });
  });


});
