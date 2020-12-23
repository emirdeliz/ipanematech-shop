/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for the app and add the rosetta context 
 * =============================================
 */
import React, { ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-rosetta';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '@hooks/use-theme';
import { GlobalStyles } from '@system/theme/global-styles';
import { ITheme } from '@system/theme/theme';
import '@assets/styles/globals.css';

const Shop = ({ Component, pageProps }: AppProps): ReactNode => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme as ITheme}>
      <I18nProvider table={pageProps.table}>
        <GlobalStyles />
        <Component {...pageProps} />
      </I18nProvider>
    </ThemeProvider>
  );
}

export default Shop;
