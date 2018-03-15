import React from 'react';
import { shallow } from 'enzyme';

import { AddRecipe } from './AddRecipe';

describe('AddRecipe component', () => {
  const component = shallow(<AddRecipe />);
  it('renders without crashing', () => {
    shallow(<AddRecipe />);
  });
  it('changes state onChange', () => {
    component.find('input').simulate('change', { target: { name: 'recname', value: 'meat' } });
    expect(component.state().recname).toEqual('meat');
  });
  it('change state onChange', () => {
    component.find('select').simulate('change', { target: { name: 'catid', value: 'beef' } });
    expect(component.state().catid).toEqual('beef');
  });
  it('change state onChange', () => {
    component.find('textarea').simulate('change', { target: { name: 'recdesc', value: 'bean' } });
    expect(component.state().recdesc).toEqual('bean');
  });
});
