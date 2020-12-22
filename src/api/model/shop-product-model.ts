/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This component is responsible for the store's product model
 * ================================================
 */
export class ShopProductModel {
  constructor(name: string, nr: number, price: number, icon: string) {
    this._name = name;
    this._nr = nr;
    this._price = price;
    this._icon = icon;
  }

  private _name: string = '';
  private _nr: number = 0;
  private _price: number = 0;
  private _icon: string = '';

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get nr() {
    return this._nr;
  }

  set nr(nr: number) {
    this._nr = nr;
  }

  get price() {
    return this._price;
  }

  set price(price: number) {
    this._price = price;
  }

  get icon() {
    return this._icon;
  }

  set icon(icon: string) {
    this._icon = icon;
  }
}