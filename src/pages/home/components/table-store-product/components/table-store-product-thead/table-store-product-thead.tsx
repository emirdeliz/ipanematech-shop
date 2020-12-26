/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 23 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the table-store-product-thead.
 * ================================================
 */
import React from 'react';
import { useTranslate } from '@hooks/use-translate';
import { Table, ECellAlign } from '@framework/index';
import { LabelStoreProduct } from '..';

interface ITableStoreProductTHead {
  allowRemove?: boolean;
  allowControls?: boolean;
}

const cellQuantitySize = 200;
const cellTotalSize = 150;
export const TableStoreProductTHead = (props: ITableStoreProductTHead) => {
  const t = useTranslate();
  const { allowControls, allowRemove } = props;
  return (
    <Table.THead>
      <Table.Row>
        <Table.Th>
          <LabelStoreProduct.Bold>{t('home.tableStoreProduct.name')}</LabelStoreProduct.Bold>
        </Table.Th>
        <Table.Th>
          <LabelStoreProduct.Bold>{t('home.tableStoreProduct.nr')}</LabelStoreProduct.Bold>
        </Table.Th>
        <Table.Th alignContent={ECellAlign.right}>
          <LabelStoreProduct.Bold>{t('home.tableStoreProduct.price')}</LabelStoreProduct.Bold>
        </Table.Th>
        <Table.Th alignContent={allowControls ? ECellAlign.center : ECellAlign.right} style={{ width: cellQuantitySize }}>
          <LabelStoreProduct.Bold>{t('home.tableStoreProduct.quantity')}</LabelStoreProduct.Bold>
        </Table.Th>
        <Table.Th alignContent={ECellAlign.right} style={{ width: cellTotalSize }}>
          <LabelStoreProduct.Bold>{t('home.tableStoreProduct.total')}</LabelStoreProduct.Bold>
        </Table.Th>
        {allowRemove && <Table.Th />}
      </Table.Row>
    </Table.THead>
  );
}