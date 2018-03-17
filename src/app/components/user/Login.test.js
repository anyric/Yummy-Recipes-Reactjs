import React from 'react';
import { shallow } from 'enzyme';

import { Login } from './Login';

describe('<Login />', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });
  it('<Login />', () => {
    const notify = jest.fn();
    const component = shallow(<Login name="login" {...notify} />);
    expect(component).toHaveLength(1);
  });
});
