import React from 'react';
import { shallow } from 'enzyme';

import { Home } from './Home';

describe('<Home />', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });
  it('renders <Home /> component', () => {
    const component = shallow(<Home name="home" />);
    expect(component).toHaveLength(1);
  });
});
