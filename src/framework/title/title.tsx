/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the title.
 * ================================================
 */
import React, { CSSProperties, memo, ReactNode } from 'react';
import { TitleStyle, TitleSmallStyle } from './title.style';

interface ITitle {
  children: ReactNode;
  noMargin?: boolean;
  style?: CSSProperties;
}

export const Title = memo((props: ITitle) => (
  <TitleStyle {...props}>{props.children}</TitleStyle>
));

export const TitleSmall = memo((props: ITitle) => (
  <TitleSmallStyle {...props}>{props.children}</TitleSmallStyle>
));

Title.displayName = 'title';