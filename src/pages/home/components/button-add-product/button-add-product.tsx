/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 24 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the button-add-product.
 * ================================================
 */
import React from 'react';
import { useTranslate } from '@hooks/use-translate';
import { useStoreProduct } from '@hooks/use-store-product';
import { Button } from '@framework/index';
import { Consumer as StoreConsumer } from '@context/store-context';
import { ButtonAddProductContainer } from './button-add-product.style';

export const ButtonAddProduct= () => {
  const t = useTranslate();
  const { products } = useStoreProduct();
  return (
    <StoreConsumer>
      {({ addProductCart, productSelected }) => {
        const productsAdd = products.filter(p => productSelected.includes(p.nr));
        return (
          <ButtonAddProductContainer>
            <Button onClick={() => addProductCart(productsAdd)}>
              {t('home.addToCart')}
            </Button>
          </ButtonAddProductContainer>
        );
      }}
    </StoreConsumer>
  );
}