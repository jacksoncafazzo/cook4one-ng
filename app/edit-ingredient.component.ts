import {Component} from 'angular2/core';
import {Ingredient} from './ingredient.model';

@Component({
  selector: 'edit-ingredient',
  inputs: ['ingredient'],
  template: `
  <div class= "recipe-form">
  <h3>Edit Recipe: </h3>
  <input [(ngModel)]="ingredient.name" class="col-sm-8 input-lg recipe-form"/>
  <input [(ngModel)]="ingredient.measurement" class="col-sm-8 input-lg recipe-form"/>
  <input [(ngModel)]="ingredient.units" class="col-sm-8 input-lg recipe-form"/>
  <input [(ngModel)]="ingredient.notes" class="col-sm-8 input-lg recipe-form"/>
  </div>
  `
})

export class EditIngredientComponent {
  public ingredient: Ingredient;
}
