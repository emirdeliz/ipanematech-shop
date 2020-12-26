/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 24 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the shop-product.
 * ================================================
 */
import React from 'react';
import { useStoreProduct } from '@hooks/use-store-product';
import { Consumer as StoreConsumer } from '@context/store-context';
import { TableStoreProduct } from '../table-store-product/table-store-product';
import { StoreProductStyle, StoreProductStyleWrapper } from './store-product.style';

export const StoreProduct = () => {
  const { products } = useStoreProduct();
  return (
    <StoreProductStyle>
      <StoreProductStyleWrapper>
        <StoreConsumer>
          {({ productIsInCart }) => {
            const productsNotCart = products.filter(p => !productIsInCart(p))
            return <TableStoreProduct allowControls allowSelect products={productsNotCart} />;
          }}
        </StoreConsumer>
      </StoreProductStyleWrapper>
    </StoreProductStyle>
  );
}