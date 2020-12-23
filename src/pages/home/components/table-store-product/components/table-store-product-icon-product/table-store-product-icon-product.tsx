/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 23 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the table-store-product-icon-product.
 * ================================================
 */
import React from 'react';
import { ProductIconContainer } from './table-store-product-icon-product.style';

interface ITableStoreProductIcon {
  icon: string;
}

export const TableStoreProductIcon = (props: ITableStoreProductIcon) => {
  const Svg = require(`../../../../../../__mock__/images/${props.icon}.svg`).default;
  return (
    <ProductIconContainer>
      <Svg />
    </ProductIconContainer>
  );
}