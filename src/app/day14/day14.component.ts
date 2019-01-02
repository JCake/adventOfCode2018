import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day14',
  templateUrl: './day14.component.html',
  styleUrls: ['./day14.component.css']
})
export class Day14Component implements OnInit {
  numberBefore(matchToFind: string): number {
    let recipes: number[] = [3, 7];
    let recipesStr = recipes.join('');
    let elf1 = 0;
    let elf2 = 1;
    while(!recipesStr.match(matchToFind)){
      let newRecipesNum = recipes[elf1] + recipes[elf2];
      let newRecipes : number[] = `${newRecipesNum}`.split('').map((recipe) => parseInt(recipe));
      recipes = recipes.concat(newRecipes);
      recipesStr = recipes.join('');
      elf1 = (elf1 + 1 + recipes[elf1]) % recipes.length;
      elf2 = (elf2 + 1 + recipes[elf2]) % recipes.length;
    }
    return recipesStr.indexOf(matchToFind);
  }
  next10(count: number): string {
    let recipes: number[] = [3, 7];
    let elf1 = 0;
    let elf2 = 1;
    while(recipes.length < count + 10){
      let newRecipesNum = recipes[elf1] + recipes[elf2];
      let newRecipes : number[] = `${newRecipesNum}`.split('').map((recipe) => parseInt(recipe));
      recipes = recipes.concat(newRecipes);
      elf1 = (elf1 + 1 + recipes[elf1]) % recipes.length;
      elf2 = (elf2 + 1 + recipes[elf2]) % recipes.length;
    }
    return recipes.slice(count, count + 10).join('');
  }

  constructor() { }

  ngOnInit() {
  }

}
