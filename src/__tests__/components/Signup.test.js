import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from '../../components/SignUp/SignUp';

describe('<Signup/>', () => {
  it('should render the Signup component', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.find('div').length).toEqual(4);
  });
});
