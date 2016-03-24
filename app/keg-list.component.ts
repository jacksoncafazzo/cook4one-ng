import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegComponent, NewKegComponent],
  templateUrl: 'app/keg-list.component.html'
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;

  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log("Hector here:", clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(kegArray): void {
    console.log("You clicked add!");
    this.kegList.push(
      new Keg(kegArray[0], kegArray[1], kegArray[2], kegArray[3], 124, this.kegList.length)
    );
  }
}
