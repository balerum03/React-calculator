import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

test('Component renders correctly', () => {
  const component = renderer.create(
    <Calculator />,
  ).toJSON();
  expect(component).toMatchSnapshot();
});
