import { Component } from 'angular2/core';
import { Ingredient } from './ingredient.model';
import { PintSaleComponent } from './pint-sale.component';


@Component ({
  selector: 'ingredient-display',
  inputs: ['ingredient'],
  directives: [PintSaleComponent],
  template: `
  <h3>{{ ingredient.name }}:  {{ingredient.measurement}} | {{ingredient.units}} pints</h3>
  <h4> {{ingredient.notes}} </h4>
   <pint-sale [ingredient]="ingredient"></pint-sale>
  `
})

export class IngredientComponent {
  public ingredient: Ingredient;
}
