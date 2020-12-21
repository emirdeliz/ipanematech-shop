import React from 'react';
import RowStyle from './row.style';

/**
 * Props.
 */
interface IRow {
  style?: any;
  children: any;
}

/**
 * Bootstrap row.
 */
const Row = (props: IRow) => (
  <RowStyle style={props.style}>
    {props.children}
  </RowStyle>
);

export default Row;
