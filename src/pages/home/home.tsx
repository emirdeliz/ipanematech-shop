/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 23 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for the homepage
 * =============================================
 */
import React from 'react';
import { useTranslate } from '@hooks/use-translate';
import { StoreProvider } from '@context/store-context';
import { Title } from '@framework/index';
import { ButtonAddProduct } from './components/button-add-product/button-add-product';
import { StoreProduct } from './components/store-product/store-product';
import { SelectAllProduct } from './components/select-all-product/select-all-product';
import { ShoppingCart } from './components/shopping-cart/shopping-cart';
import { OrderTotal } from './components/order-total/order-total';
import { HomeContainer } from './home.style';

const Home = () => {
  const t = useTranslate();
  return (
    <HomeContainer>
      <Title>{t('home.title')}</Title>
      <StoreProvider>
        <SelectAllProduct />
        <StoreProduct />
        <ButtonAddProduct />
        <ShoppingCart />
        <OrderTotal />
      </StoreProvider>
    </HomeContainer>
  );
}

export default Home;