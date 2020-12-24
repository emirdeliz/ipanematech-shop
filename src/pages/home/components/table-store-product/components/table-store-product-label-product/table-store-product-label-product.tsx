/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 23 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the table-store-product-label-product.
 * ================================================
 */
import React, { ReactNode } from 'react';
import { EFontWeight } from '@system/theme/font-weight';
import { Label, ELabelSize } from '@framework/index';
import { CSSProperties } from 'styled-components';

interface ILabelStoreProduct {
  children: ReactNode;
  style?: CSSProperties;
}

export const LabelStoreProduct = (props: ILabelStoreProduct) => {
  const { children, style } = props;
  return (
    <Label size={ELabelSize.small} style={style}>
      {children}
    </Label>
  );
}

LabelStoreProduct.Bold = (props: ILabelStoreProduct) => {
  const { style } = props;
  return (
    <LabelStoreProduct
      {...props}
      style={{ ...style, fontWeight: EFontWeight.bold }}
    />
  );
}