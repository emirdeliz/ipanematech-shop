import FormGroup from '@framework/form-group/form-group';
import InputNumber from '@framework/input-number/input-number';
import React from 'react';

interface IInputNumberFormGroup {
  label: string;
  value?: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputNumberFormGroup = (props: IInputNumberFormGroup) => (
  <FormGroup label={props.label}>
    <InputNumber onChange={props.onChange} value={props.value} />
  </FormGroup>
);

export default memo(InputNumberFormGroup);
