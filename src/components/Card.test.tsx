import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Card>test</Card>);
    expect(tree).toMatchSnapshot();
  });
});
