/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This hook is responsible for define the store-product
 * =============================================
 */
import { useEffect, useState } from 'react';
import { StoreProductsRepository } from '@api/repository/store-product-repository';
import { StoreProductModel } from '@api/model/store-product-model';

interface IUseProduct {
  findProducts: () => Promise<Array<StoreProductModel>>;
  products: Array<StoreProductModel>;
  loading: boolean;
}

export const useStoreProduct = (): IUseProduct => {
  const [products, setProducts] = useState<Array<StoreProductModel>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * @created on Mon Dec 22 2020
   * @author Emir Marques - <emirdeliz@gmail.com> 
   * @description This method is used to return the store related products that are in the repository
   */
  const findProducts = async () => {
    setLoading(true);
    const result = StoreProductsRepository.findProducts();
    setLoading(false);
    return result;
  }

  /**
   * @created on Mon Dec 22 2020
   * @author Emir Marques - <emirdeliz@gmail.com> 
   * @description This method is used to initialize the hook
   */
  const _initialize = async() => {
    const products = await findProducts();
    setProducts(products);
  }

  useEffect(() => {
    _initialize();
  }, [])
  return { findProducts, products, loading };
};