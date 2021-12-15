import React from 'react';
import { shallow } from "enzyme";
import Button from '.'

describe('Button component', () => {
  it('should have a header tag with Hello world React!', function () {
    const onClick = jest.fn()
    const props = {
      onClick,
      text: 'Simple Button'
    }
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.find("button").text()).toEqual("Simple Button");
  });
});