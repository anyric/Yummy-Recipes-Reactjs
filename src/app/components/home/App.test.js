import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe('<App />', () => {
  const component = shallow(<App />);
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('<App />', () => {
    expect(component).toHaveLength(1);
  });
});
