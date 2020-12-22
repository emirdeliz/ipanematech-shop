import React, { ChangeEvent, memo } from 'react';
import { FormGroup, Select } from '@framework/index';

interface ISelectOption {
  label?: string;
  value: number;
}

interface ISelectFormGroup {
  label: string;
  value?: number|string;
  options: ISelectOption[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectFormGroup = memo((props: ISelectFormGroup) => (
  <FormGroup label={props.label}>
    <Select onChange={props.onChange} value={props.value}>
      {props.options.map((opt) => {
        return (
          <Select.Option key={opt.value} value={opt.value}>
            {opt.label || opt.value}
          </Select.Option>
        );
      })}
    </Select>
  </FormGroup>
));