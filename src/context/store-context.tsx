/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Thu Dec 24 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for the react context of the store
 * ================================================
 */
import React, { createContext, ReactNode, useState } from 'react';
import { StoreProductModel } from '@api/model/store-product-model';

interface IStoreProvider {
  children: ReactNode;
}

interface IProductQuantity {
  [key: number]: number;
} 

interface IStoreContext {
  productQuantity: IProductQuantity;
  increaseQuantity: (storeProduct: StoreProductModel) => void;
  decreaseQuantity: (storeProduct: StoreProductModel) => void;
  findProductQuantityByProduct: (storeProduct: StoreProductModel) => number;
}

const { Provider, Consumer } = createContext<IStoreContext>({
  productQuantity: {},
  increaseQuantity: () => 0,
  decreaseQuantity: () => 0,
  findProductQuantityByProduct: () => 0
});

export const StoreProvider = (props: IStoreProvider) => {
  const [productQuantity, setProductQuantity] = useState<IProductQuantity>({}); 
  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to increase the quantity of a product;
   * @param storeProduct: product to have the updated quantity 
   */
  const increaseQuantity = (storeProduct: StoreProductModel) => {
    const nr = storeProduct?.nr;
    const currentQuantity = productQuantity[nr] || 0;
    setProductQuantity({ ...productQuantity, [nr]: currentQuantity + 1 });
  }

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to decrease the quantity of a product;
   * @param storeProduct: product to have the updated quantity 
   */
  const decreaseQuantity = (storeProduct: StoreProductModel) => {
    const nr = storeProduct?.nr;
    const currentQuantity = productQuantity[nr] || 0;
    const newValue = currentQuantity - 1;
    setProductQuantity({ ...productQuantity, [nr]: newValue >= 0 ? newValue : 0 });
  }

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to get the quantity of a product that is 
   * in the table product
   * @param storeProduct: product to get the quantity
   */
  const findProductQuantityByProduct = (storeProduct: StoreProductModel) => {
    const nr = storeProduct?.nr;
    return productQuantity[nr] || 0;
  }

  return (
    <Provider
      value={{
        productQuantity,
        increaseQuantity,
        decreaseQuantity,
        findProductQuantityByProduct
      }}
    >
      {props.children}
    </Provider>
  );
};

export { Consumer };