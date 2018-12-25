import { Component, OnInit } from '@angular/core';

const allChars = 'qwertyuioplkjhgfdsazxcvbnm'.split('');

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component implements OnInit {

  input:string;
  result:number;
  result2:string;
  
  checksum(inputs: string): number {
    let exactly2Count = 0;
    let exactly3Count = 0;
    inputs.split(/\s+/).forEach((input) => {
      const charCounts = new Map<string, number>();
      input.split('').forEach((character) => {
        if(charCounts.has(character)){
          charCounts.set(character, charCounts.get(character) + 1);
        } else {
          charCounts.set(character, 1);
        }
      });
      let exactly2 = false;
      let exactly3 = false;
      charCounts.forEach((value) => {
        if(value === 2){
          exactly2 = true;
        }
        if(value === 3){
          exactly3 = true;
        }
      });
      if(exactly2){
        exactly2Count++;
      }
      if(exactly3){
        exactly3Count++;
      }
    })

    return exactly2Count * exactly3Count;
  }

  closeWordCharacters(inputs: string): string {
    const inputsArray = inputs.split(/\s+/);
    for(let i = 0; i < inputsArray[0].length; i++){
      const modifiedInputs = [];
      let match = null;
      inputsArray.forEach((input) => {
        const modifiedInput = input.substring(0,i) + input.substring(i + 1);
        if(modifiedInputs.indexOf(modifiedInput) > -1){
          match = modifiedInput;
          return;
        } else {
          modifiedInputs.push(modifiedInput);
        }
      });
      if(match){
        return match;
      }
    }

    return null;
  }

  constructor() { }

  ngOnInit() {
  }

}
