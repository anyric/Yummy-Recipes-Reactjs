import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from './Footer';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });
  it('<Footer />', () => {
    const component = shallow(<Footer name="footer" />);
    expect(component).toHaveLength(1);
  });
});
