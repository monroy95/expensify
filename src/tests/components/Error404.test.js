import React from 'react';
import { shallow } from 'enzyme';
import Error404 from '../../components/Error404';

test('Should render ERROR404 page correctly', () => {
  const wrapper = shallow(<Error404 />);
  expect(wrapper).toMatchSnapshot();
})