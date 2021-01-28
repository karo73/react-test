import React from 'react';
import { render } from '@testing-library/react';
import Nav from './Nav';

test('renders without crushing', () => {
  render(
      <Nav
          navItems={[]}
          updateState={() => {}}
      />);
  expect('Done');
});
