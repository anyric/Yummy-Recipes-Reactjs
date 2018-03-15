import React from 'react';
import { shallow } from 'enzyme';

import { ResetPassword } from './ResetPassword';

describe('<ResetPassword />', () => {
  const component = shallow(<ResetPassword name="resetpassword" />);
  it('renders without crashing', () => {
    shallow(<ResetPassword />);
  });
  it('<ResetPassword />', () => {
    expect(component).toHaveLength(1);
  });

});
