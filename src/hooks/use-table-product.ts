/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 23 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This hook is responsible for define the table product
 * =============================================
 */
import { useState, useEffect } from 'react';
import { StoreProductModel } from '@api/model/store-product-model';
import { TableProductModel } from '@api/model/table-product';

export const useTableProduct = () => {
  const [products, setProducts] = useState<Array<TableProductModel>>([]);
  useEffect(() => {
    console.log({ products123: products });
  }, [products])

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to increase the quantity of a product;
   * @param storeProduct: product to have the updated quantity 
   */
  const increaseQuantity = (storeProduct: StoreProductModel) => {
    const isProductNew = !products.find(p => p?.product?.nr === storeProduct?.nr);
    if (isProductNew) {
      const productsUpdated = [...products, new TableProductModel(storeProduct, 1)];
      setProducts(productsUpdated);
    } else {
      const productsUpdated = _updateQuantity(storeProduct, 1);
      setProducts(productsUpdated);
    }
  }

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to decrease the quantity of a product;
   * @param storeProduct: product to have the updated quantity 
   */
  const decreaseQuantity = (storeProduct: StoreProductModel) => {
    const productsUpdated = _updateQuantity(storeProduct, -1);
    setProducts(productsUpdated);
  }

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to get the quantity of a product that is 
   * in the table product
   * @param storeProduct: product to get the quantity
   */
  const findProductQuantityByProduct = (storeProduct: StoreProductModel) => {
    const tableProduct = products.find(p => p?.product?.nr === storeProduct?.nr);
    return tableProduct?.quantity || 0;
  }

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to increase or decrease the quantity 
   * of a product that is already added to the table product
   * @param storeProduct: product to have the updated quantity
   * @param quantity: Quantity to be updated. It can be 1 or -1 
   */
  const _updateQuantity = (storeProduct: StoreProductModel, quantity: number) => {
    const productsUpdated = products.map((p) => {
      const isCurrent = p?.product?.nr === storeProduct?.nr;
      if (isCurrent) {
        p.quantity = p.quantity + quantity;
      }
      return p;
    });
    return productsUpdated;
  }

  return { products, increaseQuantity, decreaseQuantity, findProductQuantityByProduct };
};