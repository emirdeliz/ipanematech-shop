/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 24 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the shopping-cart.
 * ================================================
 */
import React from 'react';
import { Consumer as StoreConsumer } from '@context/store-context';
import { TableStoreProduct } from '../table-store-product/table-store-product';
import { ShoppingCartStyle, ShoppingCartStyleWrapper } from './shopping-cart.style';

export const ShoppingCart = () => {
  return (
    <ShoppingCartStyle>
      <ShoppingCartStyleWrapper>
        <StoreConsumer>
          {({ productCart }) => {
            return <TableStoreProduct allowRemove products={productCart} />
          }}
        </StoreConsumer>
      </ShoppingCartStyleWrapper>
    </ShoppingCartStyle>
  );
}