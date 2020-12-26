/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 23 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the table-store-product-trash-button.
 * ================================================
 */
import React from 'react';
import { Button, Tooltip } from '@framework/index';
import { useTranslate } from '@hooks/use-translate';
import IconTrash from '@assets/images/trash.svg';

interface ITableStoreProductButtonTrash {
  onClick: () => void;
}

export const TableStoreProductButtonTrash = (props: ITableStoreProductButtonTrash) => {
  const t = useTranslate();
  return (
    <Tooltip title={t('home.tableStoreProduct.tooltipDelete')}>
      <Button.Icon onClick={props.onClick}><IconTrash /></Button.Icon>
    </Tooltip>
  );
}