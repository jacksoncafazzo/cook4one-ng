import { Component, EventEmitter } from 'angular2/core';
import { IngredientComponent } from './ingredient.component';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'pint-sale',
  inputs: ['ingredient'],
  template: `
    <button (click)="subtractPint(ingredient)" class="btn btn-alert add-button">Pint Sale</button>
  `
})

export class PintSaleComponent {
  public ingredient: Ingredient;
  subtractPint(ingredient: Ingredient): void {
    //ingredient.pints--;

  }
}
