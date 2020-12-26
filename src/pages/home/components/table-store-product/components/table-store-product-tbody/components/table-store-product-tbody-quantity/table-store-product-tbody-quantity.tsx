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
import IconPlus from '@assets/images/plus-circle.svg';
import IconMinus from '@assets/images/minus-circle.svg';
import TableStoreProductTbodyQuantityStyle from './table-store-product-tbody-quantity.style';

/**
 * @created on Mon Dec 23 2020
 * @author Emir Marques - <emirdeliz@gmail.com> 
 * @description these parameters are used to define the minimum and maximum 
 * amount defined by the user
 */
const minQuantity = 0;
const maxQuantity = 100;

interface ITableStoreProductTbodyQuantity {
  children: ReactNode;
  quantity: number;
  hideControls?: boolean;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

export const TableStoreProductTbodyQuantity = (props: ITableStoreProductTbodyQuantity) => {
  const t = useTranslate();
  const { children, quantity, hideControls, increaseQuantity, decreaseQuantity } = props;

  const disabledIncrease = quantity >= maxQuantity;
  const disabledDecrease = quantity <= minQuantity;

  return(
    <TableStoreProductTbodyQuantityStyle hideControls={hideControls}>
      {!hideControls && (
        <Tooltip title={t('home.tableStoreProduct.quantityContainer.plus')} invisible={disabledIncrease}>
          <Button.Icon onClick={() => increaseQuantity()} disabled={disabledIncrease}>
            <IconPlus />
          </Button.Icon>
        </Tooltip>
      )}
      {children}
      {!hideControls && (
        <Tooltip title={t('home.tableStoreProduct.quantityContainer.minus')} invisible={disabledDecrease}>
          <Button.Icon onClick={() => decreaseQuantity()} disabled={disabledDecrease}>
            <IconMinus />
          </Button.Icon>
        </Tooltip>
      )}
    </TableStoreProductTbodyQuantityStyle>
  );
}