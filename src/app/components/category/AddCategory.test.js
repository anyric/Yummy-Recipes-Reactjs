import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from './AddCategory';

describe('<AddCategory />', () => {
  it('renders without crashing', () => {
    shallow(<AddCategory />);
  });
  it('<AddCategory />', () => {
    const component = shallow(<AddCategory name="addcategory" />);
    expect(component).toHaveLength(1);
  });
});
