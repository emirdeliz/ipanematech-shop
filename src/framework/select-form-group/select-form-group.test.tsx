import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import SelectFormGroup from './select-form-group';

describe('SelectFormGroup success tests', () => {
  test('SelectFormGroup is rendering its value', () => {
    const options: any = [
      { value: 0 },
      { value: 1 },
      { value: 2 },
    ];

    const temp = mount(
      <SelectFormGroup
        label='Value'
        options={options}
        value={1}
        // tslint:disable-next-line
        onChange={(e) => console.log(e.target.value)}
      />,
    );
    expect(temp.find('label').at(0).text()).toEqual('Value');
    expect(temp.find('select').props().value).toEqual(1);
  });

  test('SelectFormGroup is rendering its undefined value', () => {
    const options: any = [
      { value: 0 },
      { value: 1 },
      { value: 2 },
    ];
    const temp = mount(
      <SelectFormGroup
        label='Value'
        options={options}
        value={undefined}
        // tslint:disable-next-line
        onChange={(e) => console.log(e.target.value)}
      />,
    );
    expect(temp.find('label').at(0).text()).toEqual('Value');
    expect(temp.find('select').props().value).toEqual(undefined);
  });
});
