import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from './AddCategory';

describe('<AddCategory />', () => {
  const component = shallow(<AddCategory name="addcategory" />);
  it('renders without crashing', () => {
    shallow(<AddCategory />);
  });
  it('<AddCategory />', () => {
    expect(component).toHaveLength(1);
  });
  it('changes state onChange', () => {
    component.find('input').simulate('change', { target: { name: 'catname', value: 'lunch' } });
    expect(component.state().catname).toEqual('lunch');
  });
});
