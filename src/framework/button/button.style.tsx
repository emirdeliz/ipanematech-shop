/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the button style.
 * ================================================
 */
import styled from 'styled-components';
import { EBorderRadius } from '@system/theme/border-radius';
import { EFontSize } from '@system/theme/font-size';
import { EPadding } from '@system/theme/padding';

const ButtonBaseStyle = styled.button`
  outline: none;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }
`;

export const ButtonStyle = styled(ButtonBaseStyle)`
  padding: ${EPadding.xSmall};
  font-size: ${EFontSize.small};
  border-radius: ${EBorderRadius.normal};
  border-color: ${props => props.theme.buttonPrimaryBorderColor};
  background-color: ${props => props.theme.buttonPrimaryBackgroundColor};
  color: ${props => props.theme.buttonPrimaryColor};
  
  &:hover {
    background-color: ${props => props.theme.buttonPrimaryHoverBackgroundColor};
  }
`;

const buttonIconSize = 25;
export const ButtonIconStyle = styled(ButtonBaseStyle)`
  padding: 0;
  height: ${buttonIconSize}px;
  width: ${buttonIconSize}px;
  border: none;
  background-color: transparent;
  border-radius: 50%;

  &:hover {
    border: solid 2px;
  }
`;