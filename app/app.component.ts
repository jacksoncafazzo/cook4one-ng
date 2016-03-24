import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';


@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template:`
    <div class="container">
      <h1>Tap Room Angular2 App</h1>
      <keg-list
      [kegList]="kegs"
      (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
    `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Total Domination", "Ninkasi", 6, 6.7, 119, 0),
      new Keg("Mirror Pond", "Rougue Ales", 5, 6.1, 89, 1),
      new Keg("Oblivion", "Fort George", 6, 6.9, 124, 2),
      new Keg("C-Note", "Lompoc Brewing", 7, 7.7, 118, 3),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log("Mama here:", clickedKeg);
  }
}
