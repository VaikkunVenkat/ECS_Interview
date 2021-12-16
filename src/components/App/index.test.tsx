import React from 'react';
import { shallow } from 'enzyme';

import Table from '../Table'
import App from '.'

describe('App component', () => {
  it('expect table to be rendered', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Table)).toHaveLength(1)
  })
})