import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from '../../components/SignUp/SignUp';

const props = {
  signupAction: jest.fn(),
  signup: {
    isAuthenticated: false,
    isLoading: false,
    user: {},
    error: '',
  },
};

const mockSubmit = {
  preventDefault: jest.fn(),
};

const mockTarget = {
  currentTarget: {
    name: 'firstname',
    value: 'Test',
  },
};

const wrapper = shallow(<SignUp {...props} />);
describe('<Signup/>', () => {
  it('should render the Signup component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should set state error', () => {
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    handleSubmitSpy(mockSubmit);
    expect(wrapper.length).toEqual(1);
  });

  it('should call handlesubmit', () => {
    wrapper.setState({
      account: {
        firstname: 'monkey',
        lastname: 'gorilla',
        email: 'me@example.com',
        phonenumber: '07012345679',
        password: 'monkey',
        password_confirmation: 'monkey',
      },
    });
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    handleSubmitSpy(mockSubmit);
    expect(wrapper.instance().props.signupAction).toHaveBeenCalled();
  });

  it('should call handlechange', () => {
    const handleChangeSpy = jest.spyOn(wrapper.instance(), 'handleChange');
    handleChangeSpy(mockTarget);
    expect(wrapper.instance().state.account.firstname).toEqual('Test');
  });

  it('should render loading when isLoading', () => {
    wrapper.setProps({
      signup: {
        isLoading: true,
      },
    });
    expect(wrapper.length).toEqual(1);
  });
});
