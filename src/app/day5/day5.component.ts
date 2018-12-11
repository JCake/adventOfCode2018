import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.css']
})
export class Day5Component implements OnInit {

  input:string;
  result:string;

  remainingUnit(input: string): number {
    let length = 0;
    do {
      length = input.length;
      input = input.replace(/aA|Aa|bB|Bb|cC|Cc|dD|Dd|eE|Ee|fF|Ff|gG|Gg|hH|Hh|iI|Ii|jJ|Jj|kK|Kk|lL|Ll|mM|Mm|nN|Nn|oO|Oo|pP|Pp|qQ|Qq|rR|Rr|sS|Ss|tT|Tt|uU|Uu|vV|Vv|wW|Ww|xX|Xx|yY|Yy|zZ|Zz/g, '');
    } while (input.length !== length)
    
    return input.length;
  }

  remainingUnitWithProblematicRemoved(input: string): number {
    let minLength:number = input.length;
    for(let c = 65; c < 65 + 26; c++){
      console.log(String.fromCharCode(c + 32));
      const modifiedInput = input.split(String.fromCharCode(c)).join('')
        .split(String.fromCharCode(c + 32)).join('');
      console.log(modifiedInput);
      const newLength: number = this.remainingUnit(modifiedInput);
      if(newLength < minLength){
        minLength = newLength;
      }
    }
    return minLength;
  }

  constructor() { }

  ngOnInit() {
  }

}
