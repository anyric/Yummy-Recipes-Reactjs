import React from 'react';
import { shallow } from 'enzyme';

import { RecipeReport } from './RecipeReport';

describe('<RecipeReport />', () => {
  const preventDefault = jest.fn();
  const component = shallow(<RecipeReport preventDefault={preventDefault} />);
  it('renders without crashing', () => {
    shallow(<RecipeReport />);
  });
  it('<RecipeReport />', () => {
    expect(component).toHaveLength(1);
  });
  it('submit form data', () => {
    expect(component.instance().getCategory({ preventDefault }));
  });
  it('change state search', () => {
    component.find('#search').simulate('change', { target: { name: 'search', value: 'bean' } });
    expect(component.state().search).toEqual('bean');
  });
});
