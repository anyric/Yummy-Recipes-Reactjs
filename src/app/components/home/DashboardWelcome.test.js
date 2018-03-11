import React from 'react';
import { shallow } from 'enzyme';

import { DashboardWelcome } from './DashboardWelcome';

describe('<DashboardWelcome />', () => {
  it('renders without crashing', () => {
    shallow(<DashboardWelcome />);
  });
  it('<DashboardWelcome />', () => {
    const component = shallow(<DashboardWelcome name="dashboardwelcome" />);
    expect(component).toHaveLength(1);
  });
});
