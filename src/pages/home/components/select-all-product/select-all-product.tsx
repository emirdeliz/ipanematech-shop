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
import { Tooltip, InputCheckboxFormGroup } from '@framework/index';
import { SelectAllProductStyle } from './select-all-product.style';

interface ISelectAllProduct {
  selectAll: boolean;
  onSelectAll: (selected: boolean) => void;
}

export const SelectAllProduct = (props: ISelectAllProduct): JSX.Element => {
  const t = useTranslate();
  const { selectAll, onSelectAll } = props;
  return (
    <SelectAllProductStyle>
      <Tooltip title={t('home.culinar.tooltip')}>
        <InputCheckboxFormGroup
          checked={selectAll}
          label={t('home.culinar.shop')}
          onChange={(e) => onSelectAll(e.target.checked)}
        />
      </Tooltip>
    </SelectAllProductStyle>
  );
}