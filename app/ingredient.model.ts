export class Ingredient {
  public tapped: boolean = false;
  constructor(public measurement: number, public units: string, public name: string, public notes: string, public id: number) {

  }
}
