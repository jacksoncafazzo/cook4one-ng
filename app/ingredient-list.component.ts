import { Component, EventEmitter } from 'angular2/core';
import { IngredientComponent } from './ingredient.component';
import { Ingredient } from './ingredient.model';
import { EditIngredientComponent } from './edit-ingredient.component';
import { NewIngredientComponent } from './new-ingredient.component';

@Component({
  selector: 'ingredient-list',
  inputs: ['ingredientList'],
  outputs: ['onIngredientSelect'],
  directives: [IngredientComponent, EditIngredientComponent, NewIngredientComponent],
  templateUrl: 'app/ingredient-list.component.html'
})

export class IngredientListComponent {
  public ingredientList: Ingredient[];
  public onIngredientSelect: EventEmitter<Ingredient>;
  public selectedIngredient: Ingredient;

  constructor() {
    this.onIngredientSelect = new EventEmitter();
  }
  ingredientClicked(clickedIngredient: Ingredient): void {
    console.log("Hector here:", clickedIngredient);
    this.selectedIngredient = clickedIngredient;
    this.onIngredientSelect.emit(clickedIngredient);
  }
  createIngredient(ingredientArray): void {
    console.log("You clicked add!");
    this.ingredientList.push(
      new Ingredient(ingredientArray[0], ingredientArray[1], ingredientArray[2], ingredientArray[3], this.ingredientList.length)
    );
  }
}
