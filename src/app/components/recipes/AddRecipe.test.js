import React from 'react';
import { shallow } from 'enzyme';

import { AddRecipe } from './AddRecipe';

describe('<AddRecipe />', () => {
  const component = shallow(<AddRecipe />);
  it('renders without crashing', () => {
    shallow(<AddRecipe />);
  });
  it('<AddRecipe />', () => {
    expect(component).toHaveLength(1);
  });
});
