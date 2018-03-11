import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

const ls = require('../../utils/localStorage.js');

describe('<Header />', () => {
  beforeAll(() => {
    ls.setLocalStorage();
  });
  it('renders without crashing', () => {
    shallow(<Header />);
  });
  it('<Header />', () => {
    const component = shallow(<Header />);
    expect(component).toHaveLength(1);
  });
});
