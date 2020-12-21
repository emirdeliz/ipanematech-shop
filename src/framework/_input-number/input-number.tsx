import React from 'react';
import InputNumberStyle from './input-number.style';

interface IInputNumber {
  value?: number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
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
