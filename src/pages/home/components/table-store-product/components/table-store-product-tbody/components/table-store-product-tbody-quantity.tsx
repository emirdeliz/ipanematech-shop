/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 23 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the table-store-product-tbody-quantity.
 * ================================================
 */
import React, { ReactNode } from 'react';
import { Button, Tooltip } from '@framework/index';
import { useTranslate } from '@hooks/use-translate';
import { useTableProduct } from '@hooks/use-table-product';
import { ShopProductModel } from '@api/model/shop-product-model';
import IconPlus from '@assets/images/plus-circle.svg';
import IconMinus from '@assets/images/minus-circle.svg';
import TableStoreProductTbodyQuantityStyle from './table-store-product-tbody-quantity.style';

interface ITableStoreProductTbodyQuantity {
  children: ReactNode;
  product: ShopProductModel;
}

export const TableStoreProductTbodyQuantity = (props: ITableStoreProductTbodyQuantity) => {
  const { increaseQuantity, decreaseQuantity } = useTableProduct();
  const t = useTranslate();
  const { children, product } = props;
  return(
    <TableStoreProductTbodyQuantityStyle>
      <Tooltip title={t('home.tableStoreProduct.quantityContainer.plus')}>
        <Button.Icon onClick={() => increaseQuantity(product)}>
          <IconPlus />
        </Button.Icon>
      </Tooltip>
      {children}
      <Tooltip title={t('home.tableStoreProduct.quantityContainer.minus')}>
        <Button.Icon onClick={() => decreaseQuantity(product)}>
          <IconMinus />
        </Button.Icon>
      </Tooltip>
    </TableStoreProductTbodyQuantityStyle>
  );
}