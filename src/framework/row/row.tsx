/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the row.
 * ================================================
 */
import React, { memo } from 'react';
import RowStyle from './row.style';

interface IRow {
  style?: any;
  children: any;
}

export const Row = memo((props: IRow) => {
  const { style, children } = props;
  return (
    <RowStyle style={style}>
      {children}
    </RowStyle>
  );
});