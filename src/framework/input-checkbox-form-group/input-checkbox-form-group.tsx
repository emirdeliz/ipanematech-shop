/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the input-checkbox-form-group.
 * ================================================
 */
import React, { ChangeEvent, memo, ReactNode, useRef } from 'react';
import { FormGroup, FormGroupDirection, InputCheckbox } from '@framework/index';
import InputCheckboxFormGroupStyle from './input-checkbox-form-group.style';

interface IInputCheckboxFormGroup {
  label: ReactNode;
  checked?: boolean;
  noMargin?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputCheckboxFormGroup = memo((props: IInputCheckboxFormGroup) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { label, checked, noMargin, onChange } = props;
  return (
    <InputCheckboxFormGroupStyle onClick={() => inputRef.current.click()}>
      <FormGroup label={label} direction={FormGroupDirection.row} noMargin={noMargin}>
        <InputCheckbox ref={inputRef} checked={checked} onChange={onChange} />
      </FormGroup>
    </InputCheckboxFormGroupStyle>
  );
});

InputCheckboxFormGroup.displayName = 'input-checkbox-form-group';