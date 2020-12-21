import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import FormGroup from './form-group';

describe('FormGroup', () => {
  it('Calculator renders without crashing', () => {
    const component = mount(<FormGroup />);
    expect(component).toHaveLength(1);
  });

  it('Calculator renders a label', () => {
    const component = mount(<FormGroup label='Hello world' />);
    expect(component.find('label').text()).toEqual('Hello world');
  });
});
