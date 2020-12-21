/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the title.
 * ================================================
 */
import React, { memo } from 'react';
import { TitleStyle } from './title.style';

interface ITitle {
  children: any;
  style?: React.CSSProperties;
}

export const Title = memo((props: ITitle) => (
  <TitleStyle {...props}>{props.children}</TitleStyle>
));