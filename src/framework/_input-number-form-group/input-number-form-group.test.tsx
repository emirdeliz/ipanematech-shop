import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import InputNumberFormGroup from './input-number-form-group';

describe('InputNumberFormGroup success tests', () => {
  test('InputNumberFormGroup is change value', () => {
    let value = 12.23;
    const temp = mount(
       <InputNumberFormGroup label='Number' value={12.23} onChange={(e) => { value = parseFloat(e.target.value); }} />,
    );

    expect(temp.find('label').at(0).text()).toEqual('Number');

    temp.find('input').at(0).simulate('change', { target: { value: 'abc' } });
    expect(value).toEqual(12.23);

    temp.find('input').at(0).simulate('change', { target: { value: '21' } });
    expect(value).toEqual(21);
  });
});
