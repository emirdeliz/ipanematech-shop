/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the select.
 * ================================================
 */
import React, { ChangeEvent, CSSProperties, memo } from 'react';
import {
  OptionStyle,
  SelectStyle,
} from './select.style';

interface IOption {
  value: any;
  disabled?: boolean;
  children?: any;
}

interface ISelect {
  readOnly?: boolean;
  disabled?: boolean;
  value: any;
  style?: CSSProperties;
  children?: any;
  options: Array<IOption>;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = memo((props: ISelect) => {
  const { options } = props;
  return (
    <SelectStyle {...props}>
      {options.map((opt) => (
        <OptionStyle {...opt}>
          {opt.children}
        </OptionStyle>
      ))}
    </SelectStyle>
  );
});