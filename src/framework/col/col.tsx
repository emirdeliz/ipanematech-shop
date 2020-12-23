/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the col.
 * This works similar to boostrap columns.
 * ================================================
 */
import React, { CSSProperties, memo, ReactNode } from 'react';
import ColStyle from './col.style';

interface ICol {
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
}

export const Col = memo((props: ICol) => {
  return (
    <ColStyle
      className={props.className}
      style={props.style}
      size={props.size}
    >
      {props.children}
    </ColStyle>
  );
});

Col.displayName = 'col';