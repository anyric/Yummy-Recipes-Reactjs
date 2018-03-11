import React from 'react';
import { shallow } from 'enzyme';

import { UserProfile } from './UserProfile';

describe('<UserProfile />', () => {
  const component = shallow(<UserProfile />);
  it('renders without crashing', () => {
    shallow(<UserProfile />);
  });
  it('<UserProfile />', () => {
    expect(component).toHaveLength(1);
  });
});
