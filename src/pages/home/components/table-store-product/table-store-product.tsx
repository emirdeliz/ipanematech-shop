/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This component is responsible for showing the items related to the store
 * ================================================
 */
import React, { ReactNode } from 'react';
import {
  Label,
  ELabelSize,
  InputCheckbox,
  Table,
  ECellAlign
} from '@framework/index';
import { useShopProduct } from '@hooks/use-shop-product';
import { useTranslate } from '@hooks/use-translate';
import { ProductIconContainer, ProductNameContainer } from './table-store-product.style';

const buildTHead = () => {
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

const buildTBody = () => {
  const { products } = useShopProduct();
  return (
    <Table.TBody>
      {products.map((p, index) => {
        const { name, nr, price, icon } = p;
        return (
          <Table.Row key={index}>
            <Table.Td>
              <ProductNameContainer>
                <InputCheckbox onChange={() => {}}/>
                <IconStoreProductContainer icon={icon} />
                <LabelStoreProduct>{name}</LabelStoreProduct>
              </ProductNameContainer>
            </Table.Td>
            <Table.Td>
              <LabelStoreProduct>{nr}</LabelStoreProduct>
            </Table.Td>
            <Table.Td alignContent={ECellAlign.right}>
              <LabelStoreProduct>{price}</LabelStoreProduct>
            </Table.Td>
            <Table.Td alignContent={ECellAlign.right}>
              <LabelStoreProduct>{p.price} PCS</LabelStoreProduct>
            </Table.Td>
            <Table.Td alignContent={ECellAlign.right}>
              <LabelStoreProduct>{p.price} €</LabelStoreProduct>
            </Table.Td>
          </Table.Row>
        );
      })}
    </Table.TBody>
  );
}

interface LabelStoreProduct {
  children: ReactNode
}

const LabelStoreProduct = (props: LabelStoreProduct) => {
  return (
    <Label size={ELabelSize.small}>
      {props.children}
    </Label>
  );
}

interface IIconStoreProductContainer {
  icon: string;
}

const IconStoreProductContainer = (props: IIconStoreProductContainer) => {
  const Svg = require(`../../../../assets/images/${props.icon}.svg`).default;
  return (
    <ProductIconContainer>
      <Svg />
    </ProductIconContainer>
  );
}

export const TableStoreProduct = () => {
  return (
    <Table>
      {buildTHead()}
      {buildTBody()}
    </Table>
  );
}