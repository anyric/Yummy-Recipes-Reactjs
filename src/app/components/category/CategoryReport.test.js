import React from 'react';
import { shallow } from 'enzyme';

import { CategoryReport } from './CategoryReport';

describe('<CategoryReport />', () => {
  const component = shallow(<CategoryReport name="categoryreport" />);
  it('renders without crashing', () => {
    shallow(<CategoryReport />);
  });
  it('<CategoryReport />', () => {
    expect(component).toHaveLength(1);
  });
  it('change state search', () => {
    component.find('#search').simulate('change', { target: { name: 'search', value: 'bean' } });
    expect(component.state().search).toEqual('bean');
  });
});

