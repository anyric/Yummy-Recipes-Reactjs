import React from 'react';
import { shallow } from 'enzyme';

import { RecipeReport } from './RecipeReport';

describe('<RecipeReport />', () => {
  const component = shallow(<RecipeReport />);
  it('renders without crashing', () => {
    shallow(<RecipeReport />);
  });
  it('<RecipeReport />', () => {
    expect(component).toHaveLength(1);
  });
});
