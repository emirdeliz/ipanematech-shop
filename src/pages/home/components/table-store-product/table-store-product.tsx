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
import { ShopProductModel } from '@api/model/shop-product-model';
import {
  TableStoreProductTBody,
  TableStoreProductTHead
} from './components';

export interface ITableStoreProduct {
  productOptions: Array<ShopProductModel>,
  selectedItems: Array<number>,
  onSelectedItem: (item: number) => void;
}

export const TableStoreProduct = (props: ITableStoreProduct) => {
  return (
    <Table>
      <TableStoreProductTHead />
      <TableStoreProductTBody {...props} />
    </Table>
  );
}