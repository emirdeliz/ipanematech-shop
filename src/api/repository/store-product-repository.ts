/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This repository is responsible for communicating with the store's products api
 * ================================================
 */
import { StoreProductModel } from '@api/model/store-product-model';
import mock from '../../__mock__/store-product.json';

/**
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * @description TODO: This method should return items from the store when integrated with the API.
 */
export const StoreProductsRepository = class {
  static findProducts: () => StoreProductModel[] = () => {
    return mock.map((m) => new StoreProductModel(m.name, m.nr, m.price, m.icon, m.unit));
  }
}