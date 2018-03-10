import React from 'react';
import { shallow } from 'enzyme';

import { DeleteAccount } from './DeleteAccount';

describe('<DeleteAccount />', () => {
  const component = shallow(<DeleteAccount />);
  it('renders without crashing', () => {
    shallow(<DeleteAccount />);
  });
  it('<DeleteAccount />', () => {
    expect(component).toHaveLength(1);
  });
});
