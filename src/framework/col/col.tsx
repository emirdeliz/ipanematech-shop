import React from 'react';
import ColStyle from './col.style';

/**
 * Props.
 */
interface ICol {
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';
  style?: React.CSSProperties;
  /**
   * Optional classname for the column.
   */
  className?: string;
  children: any;
}

/**
 * Bootstrap column, the size is passed in the 'size' prop.
 */
const Col = (props: ICol) => {
  return (
    <ColStyle
      className={props.className}
      style={props.style}
      size={props.size}
    >
      {props.children}
    </ColStyle>
  );
};

export default Col;
