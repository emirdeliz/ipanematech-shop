/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the select-all-product.
 * ================================================
 */
import React from 'react';
import { useTranslate } from '@hooks/use-translate';
import { useStoreProduct } from '@hooks/use-store-product';
import { Consumer as StoreConsumer } from '@context/store-context';
import { Tooltip, InputCheckboxFormGroup } from '@framework/index';
import { SelectAllProductStyle } from './select-all-product.style';

export const SelectAllProduct = (): JSX.Element => {
  const t = useTranslate();
  const { products } = useStoreProduct();

  return (
    <StoreConsumer>
      {({ selectProductAll, productSelected }) => {
        /**
         * @created on Mon Dec 23 2020
         * @author Emir Marques - <emirdeliz@gmail.com>
         * @description This variable is used to update the state of selecting all. 
         */
        const isSelectedAll = productSelected.length === products.length;
        return (
          <SelectAllProductStyle>
            <Tooltip title={t('home.culinar.tooltip')}>
              <InputCheckboxFormGroup
                checked={isSelectedAll}
                label={t('home.culinar.store')}
                onChange={(e) => selectProductAll(e.target.checked, products)}
              />
            </Tooltip>
          </SelectAllProductStyle>
        );
      }}
    </StoreConsumer>
  );
}