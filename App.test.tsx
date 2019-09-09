import * as React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
