/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the order-total
 * ================================================
 */
import React from 'react';
import { Division, Label, TitleSmall } from '@framework/index';
import { formatCurrency }  from '@helpers/currency';
import { Consumer as StoreConsumer } from '@context/store-context';
import { useTranslate } from '@hooks/use-translate';
import { OrderTotalStyle, OrderTotalLabelStyle } from './order-total.style';

export const OrderTotal = () => {
  const t = useTranslate();
  return (
    <StoreConsumer>
      {({ productCart }) => {
        const orderPrice = productCart.reduce((total, p) => {
          const quantityTotal = p.quantity * p?.product?.price || 0;
          return total + quantityTotal;
        }, 0);
        return (
          <OrderTotalStyle>
            <TitleSmall>{t('home.orderTotal')}</TitleSmall>
            <Division />
            <OrderTotalLabelStyle>
              <Label>{t('home.orderPrice')} {formatCurrency(orderPrice)}</Label>
            </OrderTotalLabelStyle>
            <Division />
            <TitleSmall noMargin>{t('home.total')} {formatCurrency(orderPrice)}</TitleSmall>
          </OrderTotalStyle>
        );
      }}
    </StoreConsumer>
  );
};