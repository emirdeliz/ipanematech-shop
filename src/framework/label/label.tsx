/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the label.
 * ================================================
 */
import React, { CSSProperties, memo } from 'react';
import LabelStyle from './label.style';

interface ILabel {
  children: any;
  style?: CSSProperties;
}

export const Label = memo((props: ILabel) => (
  <LabelStyle {...props}>{props.children}</LabelStyle>
));
