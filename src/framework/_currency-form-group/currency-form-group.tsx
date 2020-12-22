import FormGroup from '@framework/form-group/form-group';
import Label from '@framework/label/label';

import React from 'react';

interface ICurrencyFormGroup {
  label: string;
  value: number;
}

const CurrencyFormGroup = (props: ICurrencyFormGroup) => (
  <FormGroup label={props.label}>
    <Label>R$ {(props.value || 0).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}</Label>
  </FormGroup>
);

export default memo(CurrencyFormGroup);
