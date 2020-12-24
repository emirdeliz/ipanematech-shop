/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the Button.
 * ================================================
 */
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonStyle, ButtonIconStyle } from './button.style';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = (props: IButton) => {
  return (
    <ButtonStyle {...props}>
      {props.children}
    </ButtonStyle>
  )
}

Button.Icon = (props: IButton) => {
  return (
    <ButtonIconStyle {...props}>
      {props.children}
    </ButtonIconStyle>
  );
}