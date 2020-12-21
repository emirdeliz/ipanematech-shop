/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the input-checkbox style.
 * ================================================
 */
import styled from 'styled-components';

export const InputCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const inputCheckboxSize = '16px';
export const InputCheckbox = styled.input.attrs(props => ({
  type: 'checkbox',
}))`
  position: relative;
  appearance: none;

  // circle
  &:before {
    content: '';
    display: block;
    box-sizing: content-box;
    width: ${inputCheckboxSize};
    height: ${inputCheckboxSize};
    border: 2px solid ${props => props.theme.inputCheckboxBorderColor};
    transition: 0.2s border-color ease;
    border-radius: ${inputCheckboxSize} / 4;
  }

  &:after {
    width: ${inputCheckboxSize} * 0.6;
    height: ${inputCheckboxSize};
    border-radius: 0;
    transform: translate(-50%, -85%) scale(0) rotate(45deg);
    background-color: transparent;
    box-shadow: 4px 4px 0px 0px ${props => props.theme.inputCheckboxBrandColor};
  }

  &:checked:before {
    border-color: ${props => props.theme.inputCheckboxBrandColor};
    transition: 0.5s border-color ease;
  }

  &:checked:after {
    animation: toggleOnCheckbox 0.2s ease forwards;
  }

  &:disabled:before {
    border-color: ${props => props.theme.inputCheckboxBorderColor};
    background-color: ${props => props.theme.inputCheckboxBorderColor};
  }

  // dot
  &:after {
    content: '';
    display: block;
    position: absolute;
    box-sizing: content-box;
    top: 50%;
    left: 50%;
    transform-origin: 50% 50%;
    background-color: ${props => props.theme.inputCheckboxBrandColor};
    width: ${inputCheckboxSize};
    height: ${inputCheckboxSize};
    border-radius: 100vh;
    transform: translate(-50%, -50%) scale(0);
  }
`;