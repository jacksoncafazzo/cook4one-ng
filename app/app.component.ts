import { Component, EventEmitter } from 'angular2/core';
import { IngredientListComponent } from './ingredient-list.component';
import { Ingredient } from './ingredient.model';


@Component({
  selector: 'my-app',
  directives: [IngredientListComponent],
  template:`
    <div class="container">
      <h1>cook4one</h1>
      <ingredient-list
      [ingredientList]="ingredient"
      (onIngredientSelect)="ingredientWasSelected($event)">
      </ingredient-list>
    </div>
    `
})

export class AppComponent {
  public ingredients: Ingredient[];
  constructor() {
    this.ingredients = [
      new Ingredient(4, "Eggs", "Organic Eggs", "room temp.", 0),
      new Ingredient(2, "cups", "Flour", "", 1),
      new Ingredient(1/2, "cup", "Sugar", "white and brown", 2),
      new Ingredient(1, "Packet", "Yeast", "Quick rising", 3)
    ];
  }
  ingredientWasSelected(clickedIngredient: Ingredient): void {
    console.log("Mama here:", clickedIngredient);
  }
}
