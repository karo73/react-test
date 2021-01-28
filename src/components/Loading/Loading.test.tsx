import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';

test('renders without crushing', () => {
  render(<Loading />);
  expect('Done');
});
