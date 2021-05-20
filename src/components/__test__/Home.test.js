import react from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

test('Component renders correctly', () => {
  const component = renderer.create(
    <Home />,
  )
  .toJSON();
  expect(component).toMatchSnapshot();
});