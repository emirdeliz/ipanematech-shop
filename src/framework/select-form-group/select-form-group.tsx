import FormGroup from '@framework/form-group/form-group';
import Select from '@framework/select/select';
import React from 'react';

interface ISelectOption {
  label?: string;
  value: number;
}

interface ISelectFormGroup {
  label: string;
  value?: number|string;
  options: ISelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectFormGroup = (props: ISelectFormGroup) => (
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
);

export default React.memo(SelectFormGroup);
