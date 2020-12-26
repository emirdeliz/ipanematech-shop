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
import { StoreProductCartModel } from '@api/model/store-product-cart-model';

interface IStoreProvider {
  children: ReactNode;
}

interface IProductQuantity {
  [key: number]: number;
} 

interface IStoreContext {
  productQuantity: IProductQuantity;
  productSelected: Array<number>;
  productCart: Array<StoreProductCartModel>;
  increaseQuantity: (storeProduct: StoreProductModel) => void;
  decreaseQuantity: (storeProduct: StoreProductModel) => void;
  findProductQuantityByProduct: (storeProduct: StoreProductModel) => number;
  addProductCart: (storeProduct: StoreProductModel|Array<StoreProductModel>) => void;
  removeProductCart: (storeProduct: StoreProductModel) => void;
  productIsInCart: (storeProduct: StoreProductModel) => boolean;
  selectProduct: (productNr: number) => void;
  selectProductAll: (selected: boolean, storeProducts: Array<StoreProductModel>) => void;
}

const { Provider, Consumer } = createContext<IStoreContext>({
  productQuantity: {},
  productSelected: [],
  productCart: [],
  increaseQuantity: () => 0,
  decreaseQuantity: () => 0,
  findProductQuantityByProduct: () => 0,
  addProductCart: () => 0,
  removeProductCart: () => 0,
  productIsInCart: () => false,
  selectProduct: () => 0,
  selectProductAll: () => 0
});

export const StoreProvider = (props: IStoreProvider) => {
  const [productQuantity, setProductQuantity] = useState<IProductQuantity>({});
  const [productSelected, setProductSelected] = useState<Array<number>>([]);
  const [productCart, setProductCart] = useState<Array<StoreProductCartModel>>([]); 
  /**
   * @created on Mon Dec 24 2020
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
   * @created on Mon Dec 24 2020
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
   * @created on Mon Dec 24 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to get the quantity of a product that is 
   * in the table product
   * @param storeProduct: product to get the quantity
   */
  const findProductQuantityByProduct = (storeProduct: StoreProductModel) => {
    const nr = storeProduct?.nr;
    return productQuantity[nr] || 0;
  }

  /**
   * @created on Mon Dec 24 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to add a product to the shopping cart
   * @param storeProduct: product or list of products to add
   */
  const addProductCart = (storeProduct: StoreProductModel|Array<StoreProductModel>) => {
    const products = Array.isArray(storeProduct) ? storeProduct : [storeProduct];
    const newProducts = products.filter(
      p => !productCart.find(pc => pc?.product?.nr === p?.nr)
    );
    
    const newProductsCart = newProducts.map(p => {
      const nr = p?.nr;
      const quantity = productQuantity[nr] || 0;
      return new StoreProductCartModel(p, quantity);
    });
    const productCartUpdated = [...productCart, ...newProductsCart];
    setProductCart(productCartUpdated);
  }

  /**
   * @created on Mon Dec 24 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to remove a product to the shopping cart
   * @param storeProduct: product to get the quantity
   */
  const removeProductCart = (storeProduct: StoreProductModel) => {
    const productCartUpdated = productCart.filter(p => p?.product?.nr !== storeProduct?.nr);
    setProductCart(productCartUpdated);
  }

  /**
   * @created on Mon Dec 24 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to check if a product is in the shopping cart
   * @param storeProduct: product to get the quantity
   */
  const productIsInCart = (storeProduct: StoreProductModel) => {
    const nr = storeProduct?.nr;
    const isInCart = !!productCart.find(p => p?.product?.nr === nr);
    return isInCart;
  }

  /**
   * @created on Mon Dec 24 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to add or remove a product number to the list of selected products 
   * @param productNr: number product
   */
  const selectProduct = (productNr: number) => {
    const isNew = !productSelected.includes(productNr);
    if (isNew) {
      setProductSelected([productNr, ...productSelected]);
    } else {
      setProductSelected(productSelected.filter(nr => nr !== productNr));
    }
  }

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to add or remove all products to the list of selected products 
   * @param selected: whether it is to include all products
   * @param storeProducts: list of products to be selected
   */
  const selectProductAll = (selected: boolean, storeProducts: Array<StoreProductModel>) => {
    if (selected) {
      const productWithQuantity = storeProducts.filter(p => productQuantity[p?.nr]);
      setProductSelected(productWithQuantity.map(p => p.nr));
    } else {
      setProductSelected([]);
    }
  }

  return (
    <Provider
      value={{
        productQuantity,
        productSelected,
        productCart,
        increaseQuantity,
        decreaseQuantity,
        findProductQuantityByProduct,
        addProductCart,
        removeProductCart,
        productIsInCart,
        selectProduct,
        selectProductAll
      }}
    >
      {props.children}
    </Provider>
  );
};

export { Consumer };