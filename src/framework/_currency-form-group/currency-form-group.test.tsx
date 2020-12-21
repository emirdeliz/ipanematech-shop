import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import CurrencyFormGroup from './currency-form-group';

describe('Currency Form Group success tests', () => {
  test('Currency Form Group is rendering its value', () => {
    const temp = mount(
       <CurrencyFormGroup label='Currency' value={12.23} />,
    );
    expect(temp.find('label').at(0).text()).toEqual('Currency');
    expect(temp.find('label').at(1).text()).toEqual('R$ 12,23');
  });

  test('Currency Form Group is rendering its negative value ', () => {
    const temp = mount(
      <CurrencyFormGroup label='Currency Negative' value={-12.23} />,
    );
    expect(temp.find('label').at(0).text()).toEqual('Currency Negative');
    expect(temp.find('label').at(1).text()).toEqual('R$ -12,23');
  });

  test('Currency Form Group is rendering its null value ', () => {
    const temp = mount(
      <CurrencyFormGroup label='Currency Null' value={null} />,
    );
    expect(temp.find('label').at(0).text()).toEqual('Currency Null');
    expect(temp.find('label').at(1).text()).toEqual('R$ 0,00');
  });
});
