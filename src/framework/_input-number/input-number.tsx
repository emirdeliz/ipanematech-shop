import React from 'react';
import InputNumberStyle from './input-number.style';

interface IInputNumber {
  value?: number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

const InputNumber = (props: IInputNumber) => (
  <InputNumberStyle
    {...props}
    maxLength={20}
    onChange={(e) => {
      const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
        props.onChange(e);
      }
    }}
  />
);

export default InputNumber;
