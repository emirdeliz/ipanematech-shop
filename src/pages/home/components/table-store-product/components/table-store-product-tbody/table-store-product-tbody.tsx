/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 23 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the table-store-product-tbody.
 * ================================================
 */
import React from 'react';
import { InputCheckboxFormGroup, Table, ECellAlign } from '@framework/index';
import { TableStoreProductIcon, LabelStoreProduct } from '..';
import { ITableStoreProduct } from '../../table-store-product';
import { ProductNameContainer } from './table-store-product-tbody.style';

export const TableStoreProductTBody = (props: ITableStoreProduct) => {
  const { selectedItems, productOptions, onSelectedItem } = props;
  return (
    <Table.TBody>
      {productOptions.map((p, index) => {
        const { name, nr, price, icon, unit } = p;
        const isSelected = selectedItems.includes(nr);
        return (
          <Table.Row key={index}>
            <Table.Td>
              <ProductNameContainer>
                <InputCheckboxFormGroup
                  noMargin
                  checked={isSelected}
                  label={(
                    <>
                      <TableStoreProductIcon icon={icon} />
                      <LabelStoreProduct>{name}</LabelStoreProduct>
                    </>
                  )}
                  onChange={() => onSelectedItem(nr)}
                />
              </ProductNameContainer>
            </Table.Td>
            <Table.Td>
              <LabelStoreProduct>{nr}</LabelStoreProduct>
            </Table.Td>
            <Table.Td alignContent={ECellAlign.right}>
              <LabelStoreProduct>{price} €/{unit}</LabelStoreProduct>
            </Table.Td>
            <Table.Td alignContent={ECellAlign.right}>
              <LabelStoreProduct>{p.price} {unit}</LabelStoreProduct>
            </Table.Td>
            <Table.Td alignContent={ECellAlign.right}>
              <LabelStoreProduct.Bold>{p.price} €</LabelStoreProduct.Bold>
            </Table.Td>
          </Table.Row>
        );
      })}
    </Table.TBody>
  );
}
