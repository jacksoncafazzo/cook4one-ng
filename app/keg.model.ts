export class Keg {
  public tapped: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public alcohol_content: number, public pints: number, public id: number) {

  }
}
