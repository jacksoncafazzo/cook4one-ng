import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Create Keg:</h3>
    <input placeholder="Beer" class="col-sm-8 input-lg" #newName>
    <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
    <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
    <input placeholder="Alcohol Content" class="col-sm-8 input-lg" #newAC>
    <button (click)="addKeg(newName, newBrand, newPrice, newAC)" class="btn-success btn-lg add-button">Add Keg to List</button>
  </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAC: HTMLInputElement){
    var kegArray: string[] = [userName.value, userBrand.value, userPrice.value, userAC.value];
    this.onSubmitNewKeg.emit(kegArray);
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAC.value = "";
  }
}
