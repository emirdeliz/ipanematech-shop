/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This component is responsible for showing the items related to the store
 * ================================================
 */
import React from 'react';
import { Table } from '@framework/index';
import { TableStoreProductTHead, TableStoreProductTBody } from './components';
import { StoreProductModel } from '@api/model/store-product-model';
import { StoreProductCartModel } from '@api/model/store-product-cart-model';

export interface ITableStoreProduct {
  products: Array<StoreProductModel|StoreProductCartModel>
  allowSelect?: boolean;
  allowControls?: boolean;
  allowRemove?: boolean;
}

export const TableStoreProduct = (props: ITableStoreProduct) => {
  return (
    <Table>
      <TableStoreProductTHead {...props} />
      <TableStoreProductTBody {...props} />
    </Table>
  );
}