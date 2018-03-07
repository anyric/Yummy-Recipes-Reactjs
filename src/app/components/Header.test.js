import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
  it('<Header />', () => {
    const component = shallow(<Header name="header" />);
    expect(component).toHaveLength(1);
  });
});
