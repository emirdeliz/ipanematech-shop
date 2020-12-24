/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This component is responsible for the store's product
 * ================================================
 */
export class ShopProductModel {
  private _name: string = '';
  private _nr: number = 0;
  private _price: number = 0;
  private _icon: string = '';
  private _unit: string = '';

  constructor(name: string, nr: number, price: number, icon: string, unit: string) {
    this._name = name;
    this._nr = nr;
    this._price = price;
    this._icon = icon;
    this._unit = unit;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get nr(): number {
    return this._nr;
  }

  set nr(nr: number) {
    this._nr = nr;
  }

  get price(): number {
    return this._price;
  }

  set price(price: number) {
    this._price = price;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(icon: string) {
    this._icon = icon;
  }

  get unit(): string {
    return this._unit;
  }

  set unit(unit: string) {
    this._unit = unit;
  }
}
