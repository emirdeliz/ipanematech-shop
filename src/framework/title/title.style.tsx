/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the title style.
 * ================================================
 */
import styled from 'styled-components';
import { EFontSize } from '@system/theme/font-size';
import { EMargin } from '@system/theme/margin';

export const TitleStyle = styled.h3<{ noMargin?: boolean}>`
  font-size: ${EFontSize.xLarge};
  margin: 0 0 ${props => props.noMargin ? 0 :EMargin.small};
`;

export const TitleSmallStyle = styled.h6<{ noMargin?: boolean}>`
  font-size: ${EFontSize.large};
  margin: 0 0 ${props => props.noMargin ? 0 :EMargin.xSmall};
`;