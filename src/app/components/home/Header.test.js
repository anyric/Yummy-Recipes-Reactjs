import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
  it('<Header />', () => {
    const preventDefault = jest.fn();
    const component = shallow(<Header />);
    expect(component).toHaveLength(1);
  });
});
