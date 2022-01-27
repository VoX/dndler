import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders HomePage', () => {
  render(<HomePage />);
  const brendan = screen.getByText('My name is');
  expect(brendan).toBeInTheDocument();
});
