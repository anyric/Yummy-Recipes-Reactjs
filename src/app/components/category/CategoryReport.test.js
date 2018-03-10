import React from 'react';
import { shallow } from 'enzyme';

import { CategoryReport } from './CategoryReport';

describe('<CategoryReport />', () => {
  it('renders without crashing', () => {
    shallow(<CategoryReport />);
  });
  it('<CategoryReport />', () => {
    const component = shallow(<CategoryReport name="categoryreport" />);
    expect(component).toHaveLength(1);
  });
});
