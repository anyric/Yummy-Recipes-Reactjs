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
  it('change state onChange', () => {
    component.find('input').simulate('change', { target: { name: 'search', value: 'bean' } });
    expect(component.state().search).toEqual('bean');
  });
});
