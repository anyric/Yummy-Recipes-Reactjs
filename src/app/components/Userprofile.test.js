import React from 'react';
import { shallow } from 'enzyme';

import { UserProfile } from './UserProfile';

describe('<UserProfile />', () => {
  it('renders without crashing', () => {
    shallow(<UserProfile />);
  });
  it('<UserProfile />', () => {
    const component = shallow(<UserProfile name="userprofile" />);
    expect(component).toHaveLength(1);
  });
});
