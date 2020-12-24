/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the button style.
 * ================================================
 */
import styled from 'styled-components';

export const ButtonStyle = styled.button`
  outline: none;

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }
`;

const buttonIconSize = 25;
export const ButtonIconStyle = styled(ButtonStyle)`
  padding: 0;
  height: ${buttonIconSize}px;
  width: ${buttonIconSize}px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    border: solid 2px;
  }
`;