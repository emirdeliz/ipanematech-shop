/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This hook is responsible for define the shop-product
 * =============================================
 */
import { useEffect, useState } from 'react';
import { ShopProductsRepository } from '@api/repository/shop-product-repository';
import { ShopProductModel } from '@api/model/shop-product-model';

interface IUseProduct {
  findProducts: () => Promise<Array<ShopProductModel>>;
  products: Array<ShopProductModel>;
  loading: boolean;
}

export const useShopProduct = (): IUseProduct => {
  const [products, setProducts] = useState<Array<ShopProductModel>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * @created on Mon Dec 22 2020
   * @author Emir Marques - <emirdeliz@gmail.com> 
   * @description This method is used to return the store related products that are in the repository
   */
  const findProducts = async () => {
    setLoading(true);
    const result = ShopProductsRepository.findProducts();
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