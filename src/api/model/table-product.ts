/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This component is responsible for the store's table product
 * ================================================
 */
import { ShopProductModel } from "./shop-product-model";

export class TableProductModel {
  private _product: ShopProductModel;
  private _quantity: number = 0;

  constructor(product: ShopProductModel, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }

  get product(): ShopProductModel {
    return this._product;
  }

  set product(product: ShopProductModel) {
    this._product = product;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(quantity: number) {
    this._quantity = quantity;
  }
}