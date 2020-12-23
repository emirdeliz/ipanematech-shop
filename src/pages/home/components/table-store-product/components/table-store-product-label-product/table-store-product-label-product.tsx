/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 23 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the table-store-product-label-product.
 * ================================================
 */
import React, { ReactNode } from 'react';
import { Label, ELabelSize } from '@framework/index';

interface LabelStoreProduct {
  children: ReactNode
}

export const LabelStoreProduct = (props: LabelStoreProduct) => {
  return (
    <Label size={ELabelSize.small}>
      {props.children}
    </Label>
  );
}