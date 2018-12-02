import { Day2Component } from './day2.component';

describe('Day2Component', () => {
  const component: Day2Component = new Day2Component();

  describe('checksum', () => {
    const scenarios = [
      {input: 'abcdef', output: 0},
      {input: 'aabbbf', output: 1},
      {input: 'aabbbf zzaudj', output: 2},
      {input: 'abcdef bababc abbcde abcccd aabcdd abcdee ababab', output: 12}
    ];
    
    scenarios.forEach((scenario) => {
      it(`it should produce checksum ${scenario.output} from ${scenario.input}`, () => {
        expect(component.checksum(scenario.input)).toEqual(scenario.output);
      });
    });
  });

  describe('close word characters', () => {
    const scenarios = [
      {input: 'aadde aaddf', output: 'aadd'},
      {input: 'caddf aaddf', output: 'addf'},
      {input: 'caldf caddf', output: 'cadf'},
      {input: `abcde
      fghij
      klmno
      pqrst
      fguij
      axcye
      wvxyz`, output: 'fgij'}
    ];

    scenarios.forEach((scenario) => {
      it(`it should produce characters ${scenario.output} from ${scenario.input}`, () => {
        expect(component.closeWordCharacters(scenario.input)).toEqual(scenario.output);
      });
    });
  });
});
