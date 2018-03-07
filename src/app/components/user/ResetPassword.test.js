import React from 'react';
import { shallow } from 'enzyme';

import { ResetPassword } from './ResetPassword';

describe('<ResetPassword />', () => {
  it('renders without crashing', () => {
    shallow(<ResetPassword />);
  });
  it('<ResetPassword />', () => {
    const component = shallow(<ResetPassword name="resetpassword" />);
    expect(component).toHaveLength(1);
  });
});
