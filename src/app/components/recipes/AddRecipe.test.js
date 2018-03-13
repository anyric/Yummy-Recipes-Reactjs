import React from 'react';
import { shallow } from 'enzyme';

import { AddRecipe } from './AddRecipe';

describe('AddRecipe component', () => {
  const component = shallow(<AddRecipe />);
  it('renders without crashing', () => {
    shallow(<AddRecipe />);
  });
  it('returns one component', () => {
    expect(component).toHaveLength(1);
  });
  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
  it('renders divs', () => {
    expect(component.find('div').length).toBe(7);
  });
});

