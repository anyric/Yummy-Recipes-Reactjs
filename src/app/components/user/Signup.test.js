import React from 'react';
import { shallow } from 'enzyme';

import { Signup } from './Signup';

describe('<Signup />', () => {
  it('renders without crashing', () => {
    shallow(<Signup />);
  });
  it('<Signup />', () => {
    const component = shallow(<Signup name="signup" />);
    expect(component).toHaveLength(1);
  });
});
