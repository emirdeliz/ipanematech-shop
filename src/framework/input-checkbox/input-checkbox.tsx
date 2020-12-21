/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the input-checkbox.
 * ================================================
 */
import React from 'react';
import { InputCheckbox as Component, InputCheckboxContainer } from './input-checkbox.style';

export const InputCheckbox = () => {
  return (
    <InputCheckboxContainer>
      <Component checked />
    </InputCheckboxContainer>
  );
};