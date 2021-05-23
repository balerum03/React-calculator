import React from 'react';
import renderer from 'react-test-renderer';
import Qoute from '../Quote';

test('Component renders correctly', () => {
  const component = renderer.create(
    <Qoute />,
  ).toJSON();
  expect(component).toMatchSnapshot();
});
