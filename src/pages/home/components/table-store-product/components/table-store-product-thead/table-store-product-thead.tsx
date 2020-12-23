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

export const TableStoreProductTHead = () => {
  const t = useTranslate();
  return (
    <Table.THead>
      <Table.Row>
        <Table.Th>
          <LabelStoreProduct>{t('home.tableStoreProduct.name')}</LabelStoreProduct>
        </Table.Th>
        <Table.Th>
          <LabelStoreProduct>{t('home.tableStoreProduct.nr')}</LabelStoreProduct>
        </Table.Th>
        <Table.Th alignContent={ECellAlign.right}>
          <LabelStoreProduct>{t('home.tableStoreProduct.price')}</LabelStoreProduct>
        </Table.Th>
        <Table.Th alignContent={ECellAlign.right}>
          <LabelStoreProduct>{t('home.tableStoreProduct.quantity')}</LabelStoreProduct>
        </Table.Th>
        <Table.Th alignContent={ECellAlign.right}>
          <LabelStoreProduct>{t('home.tableStoreProduct.total')}</LabelStoreProduct>
        </Table.Th>
      </Table.Row>
    </Table.THead>
  );
}