/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the input-checkbox.
 * ================================================
 */
import React, { forwardRef, memo, MutableRefObject } from 'react';
import { IInput } from '@framework/index';
import { InputCheckbox as Component, InputCheckboxContainer } from './input-checkbox.style';

export interface IInputCheckbox extends IInput {
  checked?: boolean;
}

export const InputCheckbox = memo(forwardRef((props: IInputCheckbox, ref: MutableRefObject<HTMLInputElement>) => {
  return (
    <InputCheckboxContainer>
      <Component
        {...props}
        ref={ref} 
        onClick={(e) => e.stopPropagation()}
      />
    </InputCheckboxContainer>
  );
}));