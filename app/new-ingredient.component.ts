import {Component, EventEmitter} from 'angular2/core';
import {Ingredient} from './ingredient.model';

@Component({
  selector: 'new-ingredient',
  outputs: ['onSubmitNewIngredient'],
  template: `
  <div class="ingredient-form">
    <h3>Create Ingredient:</h3>
    <input placeholder="2" class="col-sm-8 input-lg" #newMeasurement>
    <input placeholder="cups" class="col-sm-8 input-lg" #newUnits>
    <input placeholder="water" class="col-sm-8 input-lg" #newName>
    <input placeholder="room temp" class="col-sm-8 input-lg" #newNotes>
    <button (click)="addIngredient(newMeasurement, newUnits, newName, newNotes)" class="btn-success btn-lg add-button">Add Ingredient to List</button>
  </div>
  `
})

export class NewIngredientComponent {
  public onSubmitNewIngredient: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewIngredient = new EventEmitter();
  }
  addIngredient(userMeasurement: HTMLInputElement, userUnits: HTMLInputElement, userName: HTMLInputElement, userNotes: HTMLInputElement){
    var ingredientArray: string[] = [userMeasurement.value, userUnits.value, userName.value, userNotes.value];
    this.onSubmitNewIngredient.emit(ingredientArray);
    userName.value = "";
    userMeasurement.value = "";
    userUnits.value = "";
    userNotes.value = "";
  }
}
