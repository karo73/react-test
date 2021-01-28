import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './List';

test('renders without crushing', () => {
  render(<List listItems={[]} />);
  expect('Done');
});
