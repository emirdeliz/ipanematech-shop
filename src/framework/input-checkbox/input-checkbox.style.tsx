/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the input-checkbox style.
 * ================================================
 */
import styled from 'styled-components';
import { EBorderRadius } from '@system/theme/border-radius';

export const InputCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @keyframes toggleOnCheckbox {
    0% {
      opacity: 0;
      transform: translate(-50%, -85%) scale(0) rotate(45deg);
    }
  
    70% {
      opacity: 1;
      transform: translate(-50%, -85%) scale(0.9) rotate(45deg);
    }
    
    100% {
      transform: translate(-50%, -85%) scale(0.8) rotate(45deg);
    }
  }
`;

const inputCheckboxSize = 16;
const inputCheckboxBorderRadius = inputCheckboxSize / 4;
export const InputCheckbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  position: relative;
  appearance: none;
  outline: none;
  box-sizing: content-box;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    box-sizing: content-box;
    width: ${inputCheckboxSize}px;
    height: ${inputCheckboxSize}px;
    border: 2px solid ${props => props.theme.inputCheckboxBorderColor};
    border-radius: ${inputCheckboxBorderRadius}px;
    transition: 0.2s border-color ease;
  }
  
  &:checked:before {
    border-color: ${props => props.theme.inputCheckboxBrandColor};
    transition: 0.5s border-color ease;
  }
  
  &:disabled:before {
    border-color: ${props => props.theme.inputCheckboxBorderColor};
    background-color: ${props => props.theme.inputCheckboxBorderColor};
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    box-sizing: content-box;
    top: 50%;
    left: 50%;
    transform-origin: 50% 50%;
    width: ${inputCheckboxSize * 0.6}px ;
    height: ${inputCheckboxSize}px;
    border-radius: ${EBorderRadius.none};
    transform: translate(-50%, -85%) scale(0) rotate(45deg);
    background-color: transparent;
    box-shadow: 4px 4px 0px 0px ${props => props.theme.inputCheckboxBrandColor};
  }

  &:checked:after {
    animation: toggleOnCheckbox 0.2s ease forwards;
  }
  
  &.filled  {
    &:before {
      border-radius: ${inputCheckboxBorderRadius}px;
      transition: 0.2s border-color ease, 0.2s background-color ease;
    }
    
    &:checked:not(:disabled):before {
      background-color: ${props => props.theme.inputCheckboxBrandColor};
    }

    &:not(:disabled):after {
      box-shadow: 4px 4px 0px 0px hsl(0, 0%, 100%);
    }
  }
`;