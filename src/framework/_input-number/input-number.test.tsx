import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import InputNumber from './input-number';

describe('InputNumber success tests', () => {
  test('InputNumber is rendering its value', () => {
    const temp = mount(
       <InputNumber value={12.23} />,
    );
    expect(temp.find('input').props().value).toEqual(12.23);
  });

  test('InputNumber is rendering its negative value', () => {
    const temp = mount(
       <InputNumber value={-12.23} />,
    );
    expect(temp.find('input').props().value).toEqual(-12.23);
  });

  test('InputNumber is change value', () => {
    let value = 12.23;
    const temp = mount(
       <InputNumber value={12.23} onChange={(e) => { value = parseFloat(e.target.value); }} />,
    );

    temp.find('input').at(0).simulate('change', { target: { value: 'abc' } });
    expect(value).toEqual(12.23);

    temp.find('input').at(0).simulate('change', { target: { value: '21' } });
    expect(value).toEqual(21);
  });
});
