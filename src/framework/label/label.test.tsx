import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { Label } from './label';

describe('Label success tests', () => {
  test('Label is rendering its text', () => {
    const temp = mount(<Label>Hello world</Label>);
    expect(temp.find('label').text()).toEqual('Hello world');
  });

  test('Label should have proper spacing below the component', () => {
    const temp = mount(<Label />);
    expect(temp).toHaveStyleRule('margin-bottom', '.5rem');
  });
});
