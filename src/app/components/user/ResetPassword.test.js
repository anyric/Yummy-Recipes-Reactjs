import React from 'react';
import { shallow } from 'enzyme';

import { ResetPassword } from './ResetPassword';

describe('<ResetPassword />', () => {
  const preventDefault = jest.fn();
  const component = shallow(<ResetPassword name="resetpassword" preventDefault={preventDefault} />);
  it('renders without crashing', () => {
    shallow(<ResetPassword />);
  });
  it('<ResetPassword />', () => {
    expect(component).toHaveLength(1);
  });
  it('submit form data', () => {
    expect(component.instance().handleSubmit({ preventDefault }));
  });
  it('change state of email', () => {
    component.find('#email').simulate('change', { target: { name: 'email', value: 'exam@gmail.com' } });
    expect(component.state().email).toEqual('exam@gmail.com');
  });
  it('change state password', () => {
    component.find('#password').simulate('change', { target: { name: 'password', value: 'exam12' } });
    expect(component.state().password).toEqual('exam12');
  });
});
