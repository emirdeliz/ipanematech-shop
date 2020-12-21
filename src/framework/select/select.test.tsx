import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import Select from './select';

describe('Select success tests', () => {
  test('Select is rendering its value', () => {
    const temp = mount(
      // tslint:disable-next-line
      <Select value={1} onChange={(e) => console.log(e.target.value)}>
        <Select.Option value={0}>0</Select.Option>
        <Select.Option value={1}>1</Select.Option>
        <Select.Option value={2}>2</Select.Option>
      </Select>,
    );
    expect(temp.find('select').props().value).toEqual(1);
  });

  test('Select is rendering its undefined value', () => {
    const temp = mount(
       // tslint:disable-next-line
      <Select value={undefined} onChange={(e) => console.log(e.target.value)}>
        <Select.Option value={0}>0</Select.Option>
        <Select.Option value={1}>1</Select.Option>
        <Select.Option value={2}>2</Select.Option>
      </Select>,
    );
    expect(temp.find('select').props().value).toEqual(undefined);
  });
});
